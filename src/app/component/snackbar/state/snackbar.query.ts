import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SnackbarState, SnackbarStore } from './snackbar.store';

@Injectable({ providedIn: 'root' })
export class SnackbarQuery extends Query<SnackbarState> {
  constructor(protected store: SnackbarStore) {
    super(store);
  }
}
