import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SampleState {
  key: string;
}

export function createInitialState(): SampleState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sample' })
export class SampleStore extends Store<SampleState> {
  constructor() {
    super(createInitialState());
  }
}
