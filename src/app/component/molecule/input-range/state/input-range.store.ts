import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface InputRangeState {
  key: string;
}

export function createInitialState(): InputRangeState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'input-range' })
export class InputRangeStore extends Store<InputRangeState> {
  constructor() {
    super(createInitialState());
  }
}
