import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SigninState {
  key: string;
}

export function createInitialState(): SigninState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'signin' })
export class SigninStore extends Store<SigninState> {
  constructor() {
    super(createInitialState());
  }
}
