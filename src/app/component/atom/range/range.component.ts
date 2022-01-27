import { Component, OnInit, Self, Optional, ChangeDetectorRef, ViewChild, ElementRef, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { EFormLayout } from 'src/app/enum/form-layout.enum';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements ControlValueAccessor<string>, OnInit {
  @Input() label = null;
  @Input() status = EFormStatus.EDITABLE;
  @Input() layout = EFormLayout.DEFAULT;
  @Input() min: number = null;
  @Input() max: number = null;
  @Input() step: number = null;

  @ViewChild('input') element: ElementRef;

  onChange: (value: string) => void;
  onTouched: () => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    public validationService: ValidationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

  get required() {
    const validator = this.control?.control?.validator;
    return validator ? validator({} as AbstractControl<string>)?.required || false : false;
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
