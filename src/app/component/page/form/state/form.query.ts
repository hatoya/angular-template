import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FormStore, FormState } from './form.store';

@Injectable({ providedIn: 'root' })
export class FormQuery extends Query<FormState> {
  constructor(protected store: FormStore) {
    super(store);
  }
}