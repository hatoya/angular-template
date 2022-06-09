import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PaginationStore, PaginationState } from './pagination.store';

@Injectable({ providedIn: 'root' })
export class PaginationQuery extends Query<PaginationState> {
  constructor(protected store: PaginationStore) {
    super(store);
  }
}
