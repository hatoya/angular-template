import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ModalState {
  key: string;
}

export function createInitialState(): ModalState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'modal' })
export class ModalStore extends Store<ModalState> {
  constructor() {
    super(createInitialState());
  }
}
