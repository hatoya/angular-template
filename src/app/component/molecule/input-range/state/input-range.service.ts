import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormBuilder, FormControl, ControlsOf } from '@ngneat/reactive-forms';
import { InputRangeStore } from './input-range.store';

export interface IInputRange {
  from: string;
  to: string;
}

@Injectable({ providedIn: 'root' })
export class InputRangeService {
  constructor(private store: InputRangeStore, private formBuilder: FormBuilder) {}

  createFormGroup(fromValidators: ValidatorFn[] = [], toValidators: ValidatorFn[] = [], formGroupValidators: ValidatorFn[] = []) {
    return this.formBuilder.group<ControlsOf<IInputRange>>(
      { from: new FormControl('', fromValidators), to: new FormControl('', toValidators) },
      { validators: formGroupValidators }
    );
  }
}
