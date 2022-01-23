import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface InputState {
  key: string;
}

export function createInitialState(): InputState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'input' })
export class InputStore extends Store<InputState> {
  constructor() {
    super(createInitialState());
  }
}
