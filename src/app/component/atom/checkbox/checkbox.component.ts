import { Component, ElementRef, Input, OnInit, Self, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { IOption } from 'src/app/model/option.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() label = null;
  @Input() sub = null;
  @Input() options: IOption<any, any>[] = [];

  @ViewChildren('checkbox') elements: ElementRef[] = [];

  required = false;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngOnInit(): void {
    const validator = this.control.control.validator;
    this.required = validator ? validator({} as AbstractControl)?.required || false : false;
  }

  changValue() {
    this.onChange(
      this.elements
        .map(element => element.nativeElement)
        .filter(element => element.checked)
        .map(element => element.value)
    );
  }

  // ControlValueAccessor
  writeValue(values: any[]) {
    setTimeout(() => {
      this.elements.map(element => element.nativeElement).forEach(element => (element.checked = values.includes(element.value)));
    });
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
