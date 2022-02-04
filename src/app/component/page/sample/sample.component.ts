import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@ngneat/reactive-forms';
import { EFormLayout } from 'src/app/enum/form-layout.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { EInputType } from 'src/app/enum/input-type.enum';
import { SnackbarService } from '../../snackbar/state/snackbar.service';
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
  inputTypeEnum = EInputType;
  formStatusEnum = EFormStatus;

  constructor(
    public query: SampleQuery,
    private service: SampleService,
    private store: SampleStore,
    private snackbarService: SnackbarService
  ) {
    this.createFormGroup();
  }

  ngOnInit(): void {
    this.store.update({ loading: false });
  }

  ngAfterViewInit() {
    this.formGroup.patchValue({ status: EFormStatus.EDITABLE, text: 'text' });
  }

  ngOnDestroy(): void {
    this.store.reset();
  }

  get status() {
    return this.formGroup.value.status;
  }

  createFormGroup() {
    this.formGroup = this.service.createFormGroup();
  }

  submit() {
    if (this.formGroup.invalid) {
      this.snackbarService.pushValidationMessage();
      this.formGroup.markAllAsTouched();
      scroll(0, 0);
      return;
    }
    console.log(this.formGroup.value);
    this.snackbarService.pushSuccessMessage();
  }
}
