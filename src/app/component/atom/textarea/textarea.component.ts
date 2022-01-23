import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { EFormLayout } from '../../../enum/form-layout.enum';
import { EFormStatus } from '../../../enum/form-status.enum';
import { ValidationService } from '../../../service/validation.service';

@Component({
  selector: 'lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ControlValueAccessor<string>, OnInit {
  @Input() type = 'default';
  @Input() label = null;
  @Input() placeholder = '';
  @Input() status = EFormStatus.EDITABLE;
  @Input() layout = EFormLayout.DEFAULT;

  @ViewChild('textarea') element: ElementRef;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    public validationMessageService: ValidationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

  get required() {
    const validator = this.control?.control.validator;
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
  writeValue(value: any) {
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
