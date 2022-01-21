import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { ValidationMessageService } from 'src/app/service/validation-message.service';

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

  @ViewChild('textarea') element: ElementRef;

  required = false;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    public validationMessageService: ValidationMessageService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const validator = this.control?.control.validator;
    this.required = validator ? validator({} as AbstractControl<string>)?.required || false : false;
  }

  get isReadOnly() {
    return this.status === EFormStatus.READONLY;
  }

  get isDisabled() {
    return this.status === EFormStatus.DISABLED;
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
