import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@ngneat/reactive-forms';
import { IInputRange, InputRangeService } from 'src/app/component/molecule/input-range/state/input-range.service';
import { IFile } from 'src/app/model/file.model';
import { CustomValidators } from 'src/app/service/custom-validator.service';
import { SampleStore } from './sample.store';

export interface ISample extends Partial<any> {
  text: string;
  list: string;
  email: string;
  number: string;
  date: string;
  month: string;
  inputRange: IInputRange;
  textarea: string;
  select: string;
  checkbox: string[];
  radiobox: string;
  range: string;
  files: IFile[];
}

@Injectable({ providedIn: 'root' })
export class SampleService {
  constructor(private store: SampleStore, private formBuilder: FormBuilder, private inputRangeService: InputRangeService) {}

  createFormGroup() {
    return this.formBuilder.group<ISample>({
      text: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      list: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      date: ['', [Validators.required]],
      month: ['', [Validators.required]],
      inputRange: this.inputRangeService.createFormGroup([Validators.required], [Validators.required], [CustomValidators.dateRange()]),
      textarea: ['', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: [[], [Validators.required]],
      radiobox: ['', [Validators.required]],
      range: ['', [Validators.required]],
      files: [[], [Validators.required]]
    });
  }
}
