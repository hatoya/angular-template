import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { IOption } from 'src/app/model/option.model';
import { CustomValidators } from 'src/app/service/custom-validator.service';
import { InputRangeService } from '../../molecule/input-range/input-range.service';

@Injectable()
export class SampleService {
  loading = signal(true);
  sending = signal(false);
  options = signal<IOption[]>([
    { value: 'option1', label: 'Option1' },
    { value: 'option2', label: 'Option2' },
    { value: 'option3', label: 'Option3' },
    { value: 'option4', label: 'Option4' }
  ]);
  statusOptions = signal<IOption[]>([
    { value: EFormStatus.EDITABLE, label: EFormStatus.EDITABLE },
    { value: EFormStatus.DISABLED, label: EFormStatus.DISABLED },
    { value: EFormStatus.READONLY, label: EFormStatus.READONLY }
  ]);

  constructor(private inputRangeService: InputRangeService) {}

  get formGroup() {
    return new FormGroup({
      status: new FormControl(null, []),
      text: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      list: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
      inputRange: this.inputRangeService.createFormGroup([Validators.required], [Validators.required], [CustomValidators.dateRange()]),
      textarea: new FormControl('', [Validators.required]),
      select: new FormControl('', [Validators.required]),
      checkbox: new FormControl([], [Validators.required]),
      radiobox: new FormControl('', [Validators.required]),
      range: new FormControl('', [Validators.required]),
      files: new FormControl([], [Validators.required])
    });
  }
}
