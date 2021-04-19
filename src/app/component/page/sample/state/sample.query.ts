import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SampleState, SampleStore } from './sample.store';

@Injectable({ providedIn: 'root' })
export class SampleQuery extends Query<SampleState> {
  constructor(protected store: SampleStore) {
    super(store);
  }
}
