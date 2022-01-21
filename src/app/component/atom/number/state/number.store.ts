import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface NumberState {
  key: string;
}

export function createInitialState(): NumberState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'number' })
export class NumberStore extends Store<NumberState> {
  constructor() {
    super(createInitialState());
  }
}
