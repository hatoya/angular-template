import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { RangeStore, RangeState } from './range.store';

@Injectable({ providedIn: 'root' })
export class RangeQuery extends Query<RangeState> {
  constructor(protected store: RangeStore) {
    super(store);
  }
}
