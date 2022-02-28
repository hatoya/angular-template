import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ModalSampleState {
  key: string;
}

export function createInitialState(): ModalSampleState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'modal-sample' })
export class ModalSampleStore extends Store<ModalSampleState> {
  constructor() {
    super(createInitialState());
  }
}
