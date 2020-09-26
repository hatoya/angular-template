import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AccountIndexState {
  key: string;
}

export function createInitialState(): AccountIndexState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'account-index' })
export class AccountIndexStore extends Store<AccountIndexState> {
  constructor() {
    super(createInitialState());
  }
}
