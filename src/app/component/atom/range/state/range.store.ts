import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface RangeState {
  key: string;
}

export function createInitialState(): RangeState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'range' })
export class RangeStore extends Store<RangeState> {
  constructor() {
    super(createInitialState());
  }
}
