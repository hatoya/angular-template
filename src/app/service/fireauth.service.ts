import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { from } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  constructor(private auth: Auth) {}

  login$(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout$() {
    return from(signOut(this.auth));
  }

  getAuthState$() {
    return authState(this.auth).pipe(take(1));
  }

  streamAuthState$() {
    return authState(this.auth);
  }

  createAccount$(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(map(item => item.user.uid));
  }

  sendPasswordResetEmail$(email: string) {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  signInWithCustomToken$(customToken: string) {
    return from(signInWithCustomToken(this.auth, customToken));
  }
}
