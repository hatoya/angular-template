import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Self, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { IOption } from 'src/app/model/option.model';

@Component({
  selector: 'app-radiobox',
  templateUrl: './radiobox.component.html',
  styleUrls: ['./radiobox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioboxComponent implements ControlValueAccessor, OnInit {
  @Input() label = null;
  @Input() options: IOption<any, any>[] = [];

  @ViewChildren('radiobox') elements: ElementRef[] = [];

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

  // ControlValueAccessor
  writeValue(value: any) {
    this.elements.map(element => element.nativeElement).forEach(element => (element.checked = element.value === value));
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
