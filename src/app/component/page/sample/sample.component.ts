import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { EButtonType } from 'src/app/enum/button-type.enum';
import { EFormLayout } from 'src/app/enum/form-layout.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { EInputType } from 'src/app/enum/input-type.enum';
import { ModalSampleService } from '../../modal/modal-sample/state/modal-sample.service';
import { SnackbarService } from '../../snackbar/state/snackbar.service';
import { SampleQuery } from './state/sample.query';
import { SampleService } from './state/sample.service';
import { SampleStore } from './state/sample.store';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, AfterViewInit, OnDestroy {
  formGroup = this.service.createFormGroup();
  formLayoutEnum = EFormLayout;
  inputTypeEnum = EInputType;
  formStatusEnum = EFormStatus;
  buttonTypeENum = EButtonType;

  constructor(
    public query: SampleQuery,
    private service: SampleService,
    private store: SampleStore,
    private snackbarService: SnackbarService,
    public modalSampleService: ModalSampleService
  ) {
    this.createFormGroup();
  }

  ngOnInit(): void {
    this.store.update({ loading: false });
  }

  ngAfterViewInit() {
    this.formGroup.patchValue({ status: EFormStatus.EDITABLE, text: 'text', range: '50' });
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

  reset() {
    this.createFormGroup();
    this.formGroup.patchValue({ status: EFormStatus.EDITABLE, text: 'text', range: '50' });
    scroll(0, 0);
  }

  submit() {
    console.log(this.formGroup.value);
    if (this.formGroup.invalid) {
      this.snackbarService.pushValidationMessage();
      this.formGroup.markAllAsTouched();
      scroll(0, 0);
      return;
    }
    this.snackbarService.pushSuccessMessage();
  }
}
