import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
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
}
