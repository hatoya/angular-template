import { Injectable } from '@angular/core';
import { createAccount } from 'src/app/model/account.model';
import { FireauthService } from 'src/app/service/fireauth.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { SigninStore } from './signin.store';

@Injectable({ providedIn: 'root' })
export class SigninService {
  constructor(private signinStore: SigninStore, private fireauthService: FireauthService, private firestoreService: FirestoreService) {}

  // Fireauth
  createAccount(value) {
    const { email, password } = value;
    return this.fireauthService.createAccount(email, password);
  }

  // Firestore
  setAccount(accountId: string, value) {
    const { name, email } = value;
    return this.firestoreService.setAccount(createAccount({ id: accountId, created_at: new Date().getTime(), name, email }));
  }

  // Akita
  updateSending(sending: boolean) {
    this.signinStore.update({ sending });
  }

  resetStore() {
    this.signinStore.reset();
  }
}
