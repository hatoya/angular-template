import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, ViewChild, ElementRef, Self, Optional, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { EFormLayout } from '../../../enum/form-layout.enum';
import { EFormStatus } from '../../../enum/form-status.enum';
import { EInputType } from '../../../enum/input-type.enum';
import { IOption } from '../../../model/option.model';
import { ValidationService } from '../../../service/validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor, OnInit {
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
    public validationMessageService: ValidationService,
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
    return validator ? validator({} as FormControl)?.required || false : false;
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

  getReadOnlyLabel(value: string) {
    if (this.isMonthType) {
      return value ? this.datePipe.transform(new Date(value), 'yyyy年M月') : '';
    } else if (this.isDateType) {
      return value ? this.datePipe.transform(new Date(value), 'yyyy年M月d日') : '';
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
