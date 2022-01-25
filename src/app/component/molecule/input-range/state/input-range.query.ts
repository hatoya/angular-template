import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { InputRangeStore, InputRangeState } from './input-range.store';

@Injectable({ providedIn: 'root' })
export class InputRangeQuery extends Query<InputRangeState> {
  constructor(protected store: InputRangeStore) {
    super(store);
  }
}
