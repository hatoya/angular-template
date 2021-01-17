import { Injectable } from '@angular/core';
import { ECollection } from 'src/app/enum/collection.enum';
import { createAccount, IAccount } from 'src/app/model/account.model';
import { FirestoreService } from 'src/app/service/firestore.service';
import { AccountIndexStore } from './account-index.store';

@Injectable({ providedIn: 'root' })
export class AccountIndexService {
  constructor(private accountIndexStore: AccountIndexStore, private firestoreService: FirestoreService) {}

  // Firestore
  getAccounts() {
    return this.firestoreService.getDocuments(ECollection.ACCOUNT, createAccount);
  }

  // Akita
  updateAccounts(accounts: IAccount[]) {
    this.accountIndexStore.update({ accounts });
  }

  updateLoading(loading: boolean) {
    this.accountIndexStore.update({ loading });
  }

  resetStore() {
    this.accountIndexStore.reset();
  }
}
