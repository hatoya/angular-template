import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AccountIndexState, AccountIndexStore } from './account-index.store';

@Injectable({ providedIn: 'root' })
export class AccountIndexQuery extends Query<AccountIndexState> {
  constructor(protected store: AccountIndexStore) {
    super(store);
  }
}
