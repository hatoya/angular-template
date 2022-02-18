import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ControlsOf, FormBuilder, FormControl } from '@ngneat/reactive-forms';
import { IFile } from 'src/app/model/file.model';
import { IInputRange, InputRangeService } from '../../../../component/molecule/input-range/state/input-range.service';
import { EFormStatus } from '../../../../enum/form-status.enum';
import { CustomValidators } from '../../../../service/custom-validator.service';
import { SampleStore } from './sample.store';

export interface ISample {
  status: EFormStatus;
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
    return this.formBuilder.group<ControlsOf<ISample>>({
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
      checkbox: new FormControl([], [Validators.required]) as any, // TODO
      radiobox: new FormControl('', [Validators.required]),
      range: new FormControl('', [Validators.required]),
      files: new FormControl([], [Validators.required]) as any // TODO
    });
  }
}
