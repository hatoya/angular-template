import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ModalState {
  size: string;
  heading: string;
  opened: boolean;
  loading: boolean;
  sending: boolean;
}

export function createInitialState(): ModalState {
  return {
    size: 'default',
    heading: 'Modal',
    opened: false,
    loading: false,
    sending: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'modal' })
export class ModalStore extends Store<ModalState> {
  constructor() {
    super(createInitialState());
  }
}
