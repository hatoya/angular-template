import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { DatalistState, DatalistStore } from './datalist.store';

@Injectable({ providedIn: 'root' })
export class DatalistQuery extends Query<DatalistState> {
  constructor(protected store: DatalistStore) {
    super(store);
  }
}
