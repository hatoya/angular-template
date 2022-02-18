import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { IInputRange } from '../component/molecule/input-range/state/input-range.service';
import { IOption } from '../model/option.model';

export class CustomValidators {
  constructor() {}

  static included(options: IOption[]): ValidatorFn {
    return (control: FormControl<string>): ValidationErrors | null => {
      return control.value && !options.map(option => option.label).includes(control.value) ? { included: true } : null;
    };
  }

  static dateRange(): ValidatorFn {
    return (control: FormControl<IInputRange>): ValidationErrors | null => {
      const [fromValue, toValue] = [control.value.from, control.value.to];
      const [fromTime, toTime] = [new Date(fromValue).getTime(), new Date(toValue).getTime()];
      return fromValue && toValue && fromTime > toTime ? { daterange: true } : null;
    };
  }
}
