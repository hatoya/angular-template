import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NumberStore, NumberState } from './number.store';

@Injectable({ providedIn: 'root' })
export class NumberQuery extends Query<NumberState> {
  constructor(protected store: NumberStore) {
    super(store);
  }
}
