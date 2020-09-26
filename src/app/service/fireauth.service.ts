import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return from(this.angularFireAuth.signInWithEmailAndPassword(email, password));
  }

  logout() {
    return from(this.angularFireAuth.signOut());
  }

  getAuthState() {
    return this.angularFireAuth.authState;
  }

  createAccount(email: string, password: string) {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password));
  }
}
