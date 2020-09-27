import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { IAccount } from 'src/app/model/account.model';

export interface AccountIndexState {
  accounts: IAccount[];
  loading: boolean;
}

export function createInitialState(): AccountIndexState {
  return {
    accounts: [],
    loading: true
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'account-index' })
export class AccountIndexStore extends Store<AccountIndexState> {
  constructor() {
    super(createInitialState());
  }
}
