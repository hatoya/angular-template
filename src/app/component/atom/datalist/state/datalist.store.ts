import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface DatalistState {
  key: string;
}

export function createInitialState(): DatalistState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'datalist' })
export class DatalistStore extends Store<DatalistState> {
  constructor() {
    super(createInitialState());
  }
}
