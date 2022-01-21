import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChildren } from '@angular/core';
import { NgControl } from '@angular/forms';
import { faCircle, faDotCircle } from '@fortawesome/pro-regular-svg-icons';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { IOption } from 'src/app/model/option.model';
import { ValidationMessageService } from 'src/app/service/validation-message.service';

@Component({
  selector: 'app-radiobox',
  templateUrl: './radiobox.component.html',
  styleUrls: ['./radiobox.component.scss']
})
export class RadioboxComponent implements ControlValueAccessor<string | number>, OnInit {
  @Input() type = 'default';
  @Input() name = '';
  @Input() label = null;
  @Input() options: IOption<any, any>[] = [];

  @ViewChildren('radiobox') elements: ElementRef[] = [];

  required = false;
  faCircle = faCircle;
  faDotCircle = faDotCircle;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(@Self() @Optional() public control: NgControl, public validationMessageService: ValidationMessageService) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const validator = this.control?.control.validator;
    this.required = validator ? validator({} as AbstractControl<string | number>)?.required || false : false;
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
