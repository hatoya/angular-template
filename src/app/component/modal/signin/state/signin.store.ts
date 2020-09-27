import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SigninState {
  sending: boolean;
}

export function createInitialState(): SigninState {
  return {
    sending: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'signin' })
export class SigninStore extends Store<SigninState> {
  constructor() {
    super(createInitialState());
  }
}
