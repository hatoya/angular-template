import { auth } from 'firebase-admin';
import { from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export function createAccount$(adminAuth: auth.Auth, email: string) {
  return from(adminAuth.createUser({ email, password: 'jVKtM9xF' })).pipe(map(item => item.uid));
}

export function deleteAccount$(adminAuth: auth.Auth, uid: string) {
  return from(adminAuth.deleteUser(uid)).pipe(
    catchError(error => {
      console.error(error);
      return of(null);
    })
  );
}
