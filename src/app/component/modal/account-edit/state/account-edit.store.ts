import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AccountEditState {
  key: string;
}

export function createInitialState(): AccountEditState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'account-edit' })
export class AccountEditStore extends Store<AccountEditState> {
  constructor() {
    super(createInitialState());
  }
}
