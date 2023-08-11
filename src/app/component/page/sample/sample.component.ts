import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { EButtonType } from 'src/app/enum/button-type.enum';
import { EFormLayout } from 'src/app/enum/form-layout.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { EInputType } from 'src/app/enum/input-type.enum';
import { SnackbarService } from '../../snackbar/state/snackbar.service';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers: [SampleService]
})
export class SampleComponent implements OnInit, AfterViewInit, OnDestroy {
  formGroup = this.service.formGroup;
  formLayoutEnum = EFormLayout;
  inputTypeEnum = EInputType;
  formStatusEnum = EFormStatus;
  buttonTypeENum = EButtonType;

  constructor(public service: SampleService, private snackbarService: SnackbarService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.formGroup.patchValue({ status: EFormStatus.EDITABLE, text: 'text', range: '50' });
  }

  ngOnDestroy(): void {}

  get status() {
    return this.formGroup.value.status;
  }

  createFormGroup() {
    this.formGroup = this.service.formGroup;
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
