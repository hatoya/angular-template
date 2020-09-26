import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SigninState, SigninStore } from './signin.store';

@Injectable({ providedIn: 'root' })
export class SigninQuery extends Query<SigninState> {
  constructor(protected store: SigninStore) {
    super(store);
  }
}
