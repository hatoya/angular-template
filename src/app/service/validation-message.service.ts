import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { EValidationMessageLabel } from '../enum/validation-message.enum';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {
  constructor() {}

  getErrorMessage(error: ValidationErrors) {
    const errors = Object.keys(error || {});
    return errors.length ? EValidationMessageLabel[errors[0]] : '';
  }
}
