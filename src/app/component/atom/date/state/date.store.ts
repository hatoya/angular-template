import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface DateState {
  key: string;
}

export function createInitialState(): DateState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'date' })
export class DateStore extends Store<DateState> {
  constructor() {
    super(createInitialState());
  }
}
