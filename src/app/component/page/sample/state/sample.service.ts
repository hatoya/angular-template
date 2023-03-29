import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputRangeService } from 'src/app/component/molecule/input-range/state/input-range.service';
import { CustomValidators } from 'src/app/service/custom-validator.service';
import { SampleStore } from './sample.store';

@Injectable({ providedIn: 'root' })
export class SampleService {
  constructor(private store: SampleStore, private inputRangeService: InputRangeService) {}

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
