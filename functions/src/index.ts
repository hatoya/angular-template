import { auth, firestore, storage } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { https } from 'firebase-functions';
import { createAccount$, deleteAccount$ } from './fireauth';
import { createBundle$ } from './firestore';

initializeApp();
const adminAuth = auth();
const adminFirestore = firestore();
const adminStorage = storage();

export const createAccount = https.onCall(request => {
  const { email } = request;
  return createAccount$(adminAuth, email).toPromise();
});

export const deleteAccount = https.onCall(request => {
  const { uid } = request;
  return deleteAccount$(adminAuth, uid).toPromise();
});

export const createBundle = https.onCall(request => {
  const { collection } = request;
  return createBundle$(adminFirestore, adminStorage, collection).toPromise();
});
