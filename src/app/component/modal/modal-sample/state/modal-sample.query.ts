import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ModalSampleStore, ModalSampleState } from './modal-sample.store';

@Injectable({ providedIn: 'root' })
export class ModalSampleQuery extends Query<ModalSampleState> {
  constructor(protected store: ModalSampleStore) {
    super(store);
  }
}
