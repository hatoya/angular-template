import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { EValidation } from 'src/app/enum/validation.enum';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {
  constructor() {}

  convertMessage(errors: any[]) {
    let message: string = EValidation[errors[0]] || '';
    Object.entries(errors[1]).forEach(error => (message = message.replace(`\${${error[0]}}`, `${error[1]}`)));
    return message;
  }

  getErrorMessage(validationErrors: ValidationErrors) {
    return Object.entries(validationErrors || {})
      .map(error => this.convertMessage(error))
      .filter(error => error)
      .join('\n');
  }
}
