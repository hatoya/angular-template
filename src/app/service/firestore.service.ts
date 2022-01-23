import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  getDocFromServer,
  getDocsFromCache,
  getDocsFromServer,
  loadBundle,
  namedQuery,
  query,
  QueryConstraint,
  setDoc
} from '@angular/fire/firestore';
import { EMPTY, from, of, throwError } from 'rxjs';
import { expand, map, mergeMap } from 'rxjs/operators';
import { Struct } from 'superstruct';
import { ECollection } from '../enum/collection.enum';
import { EMessage } from '../enum/message.enum';
import { SFirestore, TFirestore } from '../model/firestore.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  get randomId() {
    return doc(collection(this.firestore, '_')).id;
  }

  updateTimestamp<T>(item: Partial<T> & Partial<TFirestore>): Partial<T> {
    const now = new Date().getTime();
    item.updated_at = now;
    if (!item.id) {
      item.id = this.randomId;
      item.created_at = now;
    }
    return item as T;
  }

  getDocuments$<T extends TFirestore>(collectionName: ECollection, struct: Struct<T>, queryConstraints: QueryConstraint[] = []) {
    return from(getDocsFromServer(query(collection(this.firestore, collectionName), ...queryConstraints))).pipe(
      map(snapshot => snapshot.docs.map(item => struct.mask(item.data())))
    );
  }

  streamDocuments$<T extends TFirestore>(collectionName: ECollection, struct: Struct<T>, queryConstraints: QueryConstraint[] = []) {
    return from(collectionData(query(collection(this.firestore, collectionName), ...queryConstraints))).pipe(
      map(items => items.map(item => struct.mask(item)))
    );
  }

  getAllDocument$<T extends TFirestore>(collectionName: ECollection, struct: Struct<T>, queryConstraints: QueryConstraint[] = []) {
    return this.getDocuments$(collectionName, struct, queryConstraints).pipe(
      expand(items => (items.length ? this.getDocuments$(collectionName, struct, queryConstraints) : EMPTY)),
      mergeMap(items => from(items))
    );
  }

  getDocument$<T extends TFirestore>(collectionName: ECollection, struct: Struct<T>, id: string) {
    return from(getDocFromServer(doc(this.firestore, `${collectionName}/${id}`))).pipe(
      mergeMap(snapshot => (snapshot.exists ? of(snapshot) : throwError(EMessage.NOT_FOUND))),
      mergeMap(snapshot => of(struct.mask(snapshot.data())))
    );
  }

  streamDocument$<T extends TFirestore>(collectionName: ECollection, struct: Struct<T>, id: string) {
    return from(docData(doc(this.firestore, `${collectionName}/${id}`))).pipe(
      mergeMap(item => (item ? of(item) : throwError(EMessage.NOT_FOUND))),
      mergeMap(item => of(struct.mask(item)))
    );
  }

  setDocument$<T extends TFirestore>(collectionName: ECollection, data: Partial<T>) {
    const item = this.updateTimestamp<T>(data);
    return from(setDoc<any>(doc(this.firestore, `${collectionName}/${item.id}`), item, { merge: true })).pipe(
      mergeMap(() => of(SFirestore.mask(item)))
    );
  }

  deleteDocument$(collectionName: ECollection, id: string) {
    return from(deleteDoc(doc(this.firestore, `${collectionName}/${id}`)));
  }

  loadBundle$(response: any) {
    return from(loadBundle(this.firestore, response).then());
  }

  getDocumentsFromBundle$<T extends TFirestore>(collectionName: ECollection, struct: Struct<T>) {
    return from(namedQuery(this.firestore, collectionName)).pipe(
      mergeMap(item => getDocsFromCache(item)),
      map(snapshot => snapshot.docs.map(item => struct.mask(item.data())))
    );
  }
}
