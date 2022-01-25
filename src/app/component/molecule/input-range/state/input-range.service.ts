import { Injectable } from '@angular/core';
import { FormBuilder, ValidatorFn } from '@ngneat/reactive-forms';
import { InputRangeStore } from './input-range.store';

export interface IInputRange {
  from: string;
  to: string;
}

@Injectable({ providedIn: 'root' })
export class InputRangeService {
  constructor(private store: InputRangeStore, private formBuilder: FormBuilder) {}

  createFormGroup(fromValidators: ValidatorFn[] = [], toValidators: ValidatorFn[] = [], formGroupValidators: ValidatorFn[] = []) {
    return this.formBuilder.group<IInputRange>({ from: ['', fromValidators], to: ['', toValidators] }, { validators: formGroupValidators });
  }
}
