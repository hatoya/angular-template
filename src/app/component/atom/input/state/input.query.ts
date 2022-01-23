import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { InputStore, InputState } from './input.store';

@Injectable({ providedIn: 'root' })
export class InputQuery extends Query<InputState> {
  constructor(protected store: InputStore) {
    super(store);
  }
}
