import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@ngneat/reactive-forms';
import { IFile } from 'src/app/model/file.model';
import { SampleStore } from './sample.store';

export interface ISample extends Partial<any> {
  text: string;
  email: string;
  number: string;
  date: string;
  month: string;
  textarea: string;
  select: string;
  checkbox: string[];
  radiobox: string;
  files: IFile[];
}

@Injectable({ providedIn: 'root' })
export class SampleService {
  constructor(private store: SampleStore, private formBuilder: FormBuilder) {}

  createFormGroup() {
    return this.formBuilder.group<ISample>({
      text: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      date: ['', [Validators.required]],
      month: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: [[], [Validators.required]],
      radiobox: ['', [Validators.required]],
      files: [[], [Validators.required]]
    });
  }
}
