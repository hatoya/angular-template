import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PaginationState {
  key: string;
}

export function createInitialState(): PaginationState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'pagination' })
export class PaginationStore extends Store<PaginationState> {
  constructor() {
    super(createInitialState());
  }
}
