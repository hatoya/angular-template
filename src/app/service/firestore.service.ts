import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { EMPTY, from, of, throwError } from 'rxjs';
import { expand, map, mergeMap, take } from 'rxjs/operators';
import { FirestoreQueryBuilder } from '../builder/firestore-query.builder';
import { ECollection } from '../enum/collection.enum';
import { EError } from '../enum/error.enum';
import { createFirestore, IFirestore } from '../model/firestore.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  updateTimestamp<T>(item: Partial<T> & Partial<IFirestore>): Partial<T> {
    const now = new Date().getTime();
    item.updated_at = now;
    if (!item.id) {
      item.id = this.angularFirestore.createId();
      item.created_at = now;
    }
    return item as T;
  }

  getDocuments<T extends IFirestore>(collection: ECollection, initFunc: (item: Partial<T>) => T, query = new FirestoreQueryBuilder<T>()) {
    return this.angularFirestore
      .collection<T>(collection, ref => query.build(ref as firebase.default.firestore.CollectionReference<T>))
      .valueChanges()
      .pipe(map(items => items.map(item => initFunc(item))));
  }

  getAllDocument<T extends IFirestore>(collection: ECollection, initFunc: (item: Partial<T>) => T, query = new FirestoreQueryBuilder<T>()) {
    return this.getDocuments(collection, initFunc, query).pipe(
      take(1),
      expand(arts =>
        arts.length
          ? this.getDocuments(collection, initFunc, query.startAfter(arts[arts.length - 1][query.field + '']).limit(100)).pipe(take(1))
          : EMPTY
      ),
      mergeMap(items => from(items))
    );
  }

  getDocument<T extends IFirestore>(collection: ECollection, initFunc: (item: Partial<T>) => T, id: string) {
    return this.angularFirestore
      .doc<T>(`${collection}/${id}`)
      .valueChanges()
      .pipe(
        mergeMap(item => (item ? of(item) : throwError(EError.E404))),
        map(item => initFunc(item))
      );
  }

  setDocument<T extends IFirestore>(collection: ECollection, data: Partial<T>) {
    const item = this.updateTimestamp<T>(data);
    return from(this.angularFirestore.doc(`${collection}/${item.id}`).set(item, { merge: true })).pipe(map(() => createFirestore(item)));
  }

  deleteDocument(collection: ECollection, id: string) {
    return from(this.angularFirestore.doc(`${collection}/${id}`).delete());
  }
}
