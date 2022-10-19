import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { InputRangeStore } from './input-range.store';

@Injectable({ providedIn: 'root' })
export class InputRangeService {
  constructor(private store: InputRangeStore) {}

  createFormGroup(fromValidators: ValidatorFn[] = [], toValidators: ValidatorFn[] = [], formGroupValidators: ValidatorFn[] = []) {
    return new FormGroup(
      { from: new FormControl('', fromValidators), to: new FormControl('', toValidators) },
      { validators: formGroupValidators }
    );
  }
}
