import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { IOption } from 'src/app/model/option.model';
import { ControlValueAccessor, NgControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements ControlValueAccessor, OnInit {
  @Input() label = null;
  @Input() options: IOption<any, any>[] = [];

  @ViewChild('radio') element: ElementRef;

  required = false;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngOnInit(): void {
    const validator = this.control.control.validator;
    this.required = validator ? validator({} as AbstractControl).required || false : false;
  }

  // ControlValueAccessor
  writeValue(value: any) {
    if (this.element) {
      this.element.nativeElement.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
