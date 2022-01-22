import { DatePipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, Self, Optional, ChangeDetectorRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { EDateFormat } from 'src/app/enum/date-format.enum';
import { EFormLayout } from 'src/app/enum/form-layout.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { EInputType } from 'src/app/enum/input-type.enum';
import { IOption } from 'src/app/model/option.model';
import { ValidationMessageService } from 'src/app/service/validation-message.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor<string>, OnInit {
  @Input() type = EInputType.TEXT;
  @Input() label = null;
  @Input() placeholder = '';
  @Input() unit = '';
  @Input() min = '';
  @Input() max = '';
  @Input() list = '';
  @Input() options: IOption[] = [];
  @Input() status = EFormStatus.EDITABLE;
  @Input() layout = EFormLayout.DEFAULT;

  @ViewChild('text') element: ElementRef;

  uuid = uuidv4();
  formStatusEnum = EFormStatus;
  inputTypeEnum = EInputType;
  faCalendarAlt = faCalendarAlt;

  onChange: (value: string) => void;
  onTouched: () => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    public validationMessageService: ValidationMessageService,
    private changeDetectorRef: ChangeDetectorRef,
    private datePipe: DatePipe
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

  get required() {
    const validator = this.control?.control?.validator;
    return validator ? validator({} as AbstractControl<string | number>)?.required || false : false;
  }

  get isNumberType() {
    return this.type === EInputType.NUMBER;
  }

  get isMonthType() {
    return this.type === EInputType.MONTH;
  }

  get isDateType() {
    return this.type === EInputType.DATE;
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

  getReadOnlyLabel(value: string | number) {
    if (this.isMonthType) {
      return value ? this.datePipe.transform(new Date(value), EDateFormat.MONTH) : '';
    } else if (this.isDateType) {
      return value ? this.datePipe.transform(new Date(value), EDateFormat.DAY) : '';
    } else {
      return value;
    }
  }

  // ControlValueAccessor
  writeValue(value: string) {
    if (this.element) {
      this.element.nativeElement.value = value;
      this.changeDetectorRef.detectChanges();
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
