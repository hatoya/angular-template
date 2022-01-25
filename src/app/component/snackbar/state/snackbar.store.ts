import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { TMessage } from 'src/app/model/message.model';

export interface SnackbarState {
  messages: TMessage[];
}

export function createInitialState(): SnackbarState {
  return {
    messages: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'snackbar' })
export class SnackbarStore extends Store<SnackbarState> {
  constructor() {
    super(createInitialState());
  }
}
