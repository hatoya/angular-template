import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { IOption } from 'src/app/model/option.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() type = 'default';
  @Input() label = null;
  @Input() blank: string = null;
  @Input() options: IOption<any, any>[] = [];

  @ViewChild('select') element: ElementRef;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngOnInit(): void {}

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
