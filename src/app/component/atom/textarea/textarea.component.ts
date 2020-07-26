import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ControlValueAccessor, OnInit {
  @Input() type = 'default';
  @Input() label = null;
  @Input() placeholder = '';

  @ViewChild('textarea') element: ElementRef;

  required = false;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngOnInit(): void {
    this.required = this.control.control.validator({} as AbstractControl)?.required || false;
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
