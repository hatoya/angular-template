import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChildren } from '@angular/core';
import { NgControl } from '@angular/forms';
import { faCircle, faDotCircle } from '@fortawesome/pro-regular-svg-icons';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { v4 as uuidv4 } from 'uuid';
import { EFormLayout } from '../../../enum/form-layout.enum';
import { EFormStatus } from '../../../enum/form-status.enum';
import { IOption } from '../../../model/option.model';
import { ValidationService } from '../../../service/validation.service';

@Component({
  selector: 'app-radiobox',
  templateUrl: './radiobox.component.html',
  styleUrls: ['./radiobox.component.scss']
})
export class RadioboxComponent implements ControlValueAccessor<string | number>, OnInit {
  @Input() type = 'default';
  @Input() name = uuidv4();
  @Input() label = null;
  @Input() options: IOption<any, any>[] = [];
  @Input() status = EFormStatus.EDITABLE;
  @Input() layout = EFormLayout.DEFAULT;

  @ViewChildren('radiobox') elements: ElementRef[] = [];

  faCircle = faCircle;
  faDotCircle = faDotCircle;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(@Self() @Optional() public control: NgControl, public validationMessageService: ValidationService) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

  get required() {
    const validator = this.control?.control?.validator;
    return validator ? validator({} as AbstractControl<string | number>)?.required || false : false;
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

  // ControlValueAccessor
  writeValue(value: any) {
    setTimeout(() => {
      this.elements.map(element => element.nativeElement).forEach(element => (element.checked = element.value === value));
    });
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
