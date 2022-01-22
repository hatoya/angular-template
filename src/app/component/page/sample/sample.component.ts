import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@ngneat/reactive-forms';
import { EFormLayout } from 'projects/lib/src/lib/enum/form-layout.enum';
import { SampleQuery } from './state/sample.query';
import { ISample, SampleService } from './state/sample.service';
import { SampleStore } from './state/sample.store';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, AfterViewInit, OnDestroy {
  formGroup: FormGroup<ISample>;
  formLayoutEnum = EFormLayout;

  constructor(public query: SampleQuery, private service: SampleService, private store: SampleStore) {
    this.createFormGroup();
  }

  ngOnInit(): void {
    this.store.update({ loading: false });
  }

  ngAfterViewInit() {
    this.formGroup.patchValue({ text: 'TEXT' });
  }

  ngOnDestroy(): void {
    this.store.reset();
  }

  createFormGroup() {
    this.formGroup = this.service.createFormGroup();
  }

  submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      scroll(0, 0);
      return;
    }
    this.store.update({ sending: false });
    console.log(this.formGroup.value);
    this.store.update({ sending: true });
  }
}
