import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { faCircle, faDotCircle } from '@fortawesome/pro-regular-svg-icons';
import { IOption } from 'src/app/model/option.model';

@Component({
  selector: 'app-radiobox',
  templateUrl: './radiobox.component.html',
  styleUrls: ['./radiobox.component.scss']
})
export class RadioboxComponent implements ControlValueAccessor, OnInit {
  @Input() type = 'default';
  @Input() name = '';
  @Input() label = null;
  @Input() options: IOption<any, any>[] = [];

  @ViewChildren('radiobox') elements: ElementRef[] = [];

  required = false;
  faCircle = faCircle;
  faDotCircle = faDotCircle;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(@Self() @Optional() public control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const validator = this.control?.control.validator;
    this.required = validator ? validator({} as AbstractControl)?.required || false : false;
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
