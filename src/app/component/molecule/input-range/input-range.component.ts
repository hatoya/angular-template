import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { EFormLayout } from 'src/app/enum/form-layout.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { EInputType } from 'src/app/enum/input-type.enum';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnInit {
  @Input() label = null;
  @Input() unit = null;
  @Input() type = EInputType.TEXT;
  @Input() layout = EFormLayout.DEFAULT;
  @Input() status = EFormStatus.EDITABLE;

  constructor(
    public controlContainer: ControlContainer,
    private changeDetectorRef: ChangeDetectorRef,
    public validationService: ValidationService
  ) {}

  ngOnInit(): void {}

  emit() {
    this.changeDetectorRef.detectChanges();
  }

  get formGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get fromControl() {
    return this.formGroup.controls.from;
  }

  get toControl() {
    return this.formGroup.controls.to;
  }

  get isReadOnly() {
    return this.status === EFormStatus.READONLY;
  }

  get isDisabled() {
    return this.status === EFormStatus.DISABLED;
  }

  get isSideLayout() {
    return this.layout === EFormLayout.SIDE;
  }

  get required() {
    const fromValidator = this.formGroup.controls.from.validator;
    const toValidator = this.formGroup.controls.to.validator;
    return (
      (fromValidator ? fromValidator({} as FormControl<string>)?.required : false) ||
      (toValidator ? toValidator({} as FormControl<string>)?.required : false)
    );
  }
}
