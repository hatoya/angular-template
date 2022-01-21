import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { DateStore, DateState } from './date.store';

@Injectable({ providedIn: 'root' })
export class DateQuery extends Query<DateState> {
  constructor(protected store: DateStore) {
    super(store);
  }
}
