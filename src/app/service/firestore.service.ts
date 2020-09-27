import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { createAccount, IAccount } from '../model/account.model';
import { IFirestore } from '../model/firestore.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  updateTimestamp<T>(item: Partial<T> & Partial<IFirestore>): Partial<T> {
    const now = firestore.Timestamp.now();
    item.updated_at = now;
    if (!item.id) {
      item.id = this.angularFirestore.createId();
      item.created_at = now;
    }
    return item as T;
  }

  // Account
  getAccounts() {
    return this.angularFirestore
      .collection<IAccount>('account', ref => {
        ref = ref.orderBy('created_at', 'asc') as any;
        return ref;
      })
      .valueChanges()
      .pipe(map(items => items.map(item => createAccount(item))));
  }

  setAccount(account: Partial<IAccount>) {
    const item = this.updateTimestamp(account);
    return from(this.angularFirestore.doc(`account/${item.id}`).set(item)).pipe(map(() => createAccount(item)));
  }
}
