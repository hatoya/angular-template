import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AccountEditState, AccountEditStore } from './account-edit.store';

@Injectable({ providedIn: 'root' })
export class AccountEditQuery extends Query<AccountEditState> {
  constructor(protected store: AccountEditStore) {
    super(store);
  }
}
