import { Inject, Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor(@Inject('validation') private validation) {}

  convertMessage(errors: any[]) {
    let message: string = this.validation[errors[0]] || '';
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
