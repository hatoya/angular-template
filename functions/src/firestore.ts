import { firestore, storage } from 'firebase-admin';
import { logger } from 'firebase-functions/v1';
import { Timestamp } from 'firebase/firestore';
import { from, of, throwError } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Struct } from 'superstruct';
import { ECollection } from '../../src/app/enum/collection.enum';
import { EMessage } from '../../src/app/enum/message.enum';
import { TFirestore } from '../../src/app/model/firestore.model';

export function randomId(adminFirestore: firestore.Firestore) {
  return adminFirestore.collection('_').doc().id;
}

export function updateTimestamp(adminFirestore: firestore.Firestore, item: Partial<TFirestore>) {
  const now = Timestamp.now();
  item.updated_at = now;
  if (!item.id) {
    item.id = randomId(adminFirestore);
    item.created_at = now;
  }
  return item as Partial<TFirestore>;
}

export function existDocument$(adminFirestore: firestore.Firestore, collection: ECollection, id: string) {
  return from(adminFirestore.doc(`${collection}/${id}`).get()).pipe(map(snapshot => snapshot.exists));
}

export function getDocument$<T extends TFirestore>(
  adminFirestore: firestore.Firestore,
  collection: ECollection,
  struct: Struct<T>,
  id: string
) {
  return from(adminFirestore.doc(`${collection}/${id}`).get()).pipe(
    mergeMap(snapshot => (snapshot.exists ? of(snapshot) : throwError(EMessage.NOT_FOUND))),
    mergeMap(snapshot => of(struct.mask(snapshot.data())))
  );
}

export function setDocument$<T extends TFirestore>(adminFirestore: firestore.Firestore, collection: ECollection, document: Partial<T>) {
  const item = updateTimestamp(adminFirestore, document);
  return existDocument$(adminFirestore, collection, item.id || '').pipe(
    mergeMap(flag => {
      if (!flag && !item.created_at) {
        item.created_at = item.updated_at;
      }
      return adminFirestore.doc(`${collection}/${item.id}`).set(item, { merge: true });
    })
  );
}

export function deleteDocument$(adminFirestore: firestore.Firestore, collection: ECollection, id: string) {
  return from(adminFirestore.doc(`${collection}/${id}`).delete().then());
}

export function createBundle$(adminFirestore: firestore.Firestore, adminStorage: storage.Storage, collection: ECollection) {
  return from(adminFirestore.collection(collection).get()).pipe(
    mergeMap(snapshot =>
      adminStorage
        .bucket()
        .file(`bundle/${collection}.txt`)
        .save(adminFirestore.bundle(collection).add(collection, snapshot).build(), { gzip: true })
    ),
    tap(() => logger.info(`${collection} bundle: success`))
  );
}
