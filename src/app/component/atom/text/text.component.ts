import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { EDateFormat } from 'src/app/enum/date-format.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { EFormType } from 'src/app/enum/form-type.enum';
import { ValidationMessageService } from 'src/app/service/validation-message.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements ControlValueAccessor, OnInit {
  @Input() type = EFormType.TEXT;
  @Input() label = null;
  @Input() placeholder = '';
  @Input() unit = '';
  @Input() status = EFormStatus.EDITABLE;

  @ViewChild('text') element: ElementRef;

  required = false;
  faCalendarAlt = faCalendarAlt;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

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

  ngOnInit(): void {
    const validator = this.control?.control.validator;
    this.required = validator ? validator({} as AbstractControl)?.required || false : false;
  }

  emit() {
    this.changeDetectorRef.detectChanges();
  }

  get isDateType() {
    return this.type === EFormType.DATE;
  }

  get isMonthType() {
    return this.type === EFormType.MONTH;
  }

  get isReadOnly() {
    return this.status === EFormStatus.READONLY;
  }

  get isDisabled() {
    return this.status === EFormStatus.DISABLED;
  }

  getReadOnlyLabel(value: any) {
    if (this.type === EFormType.DATE) {
      return value ? this.datePipe.transform(new Date(value), EDateFormat.DAY) : '';
    } else if (this.type === EFormType.MONTH) {
      return value ? this.datePipe.transform(new Date(value), EDateFormat.MONTH) : '';
    } else {
      return value;
    }
  }

  // ControlValueAccessor
  writeValue(value: any) {
    if (this.element) {
      this.element.nativeElement.value = value;
      this.emit();
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
