import { auth } from 'firebase-admin';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export function createAccount$(adminAuth: auth.Auth, uid: string, email: string, password: string) {
  return from(adminAuth.createUser({ uid, email, password })).pipe(map(item => item.uid));
}

export function deleteAccount$(adminAuth: auth.Auth, uid: string) {
  return from(adminAuth.deleteUser(uid));
}
