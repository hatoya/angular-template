import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class InputRangeService {
  constructor() {}

  createFormGroup(fromValidators: ValidatorFn[] = [], toValidators: ValidatorFn[] = [], formGroupValidators: ValidatorFn[] = []) {
    return new FormGroup(
      { from: new FormControl('', fromValidators), to: new FormControl('', toValidators) },
      { validators: formGroupValidators }
    );
  }
}
