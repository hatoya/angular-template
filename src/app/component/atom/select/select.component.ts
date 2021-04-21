import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { IOption } from 'src/app/model/option.model';
import { ValidationMessageService } from 'src/app/service/validation-message.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() type = 'default';
  @Input() label = null;
  @Input() blank: string = null;
  @Input() options: IOption<any, any>[] = [];
  @Input() status = EFormStatus.EDITABLE;

  @ViewChild('select') element: ElementRef;

  required = false;
  faChevronDown = faChevronDown;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

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
    this.required = validator ? validator({} as AbstractControl)?.required || false : false;
  }

  emit() {
    this.changeDetectorRef.detectChanges();
  }

  get isReadOnly() {
    return this.status === EFormStatus.READONLY;
  }

  get isDisabled() {
    return this.status === EFormStatus.DISABLED;
  }

  getOptionLabel(value: any) {
    return this.options.find(option => option.value === value)?.label || '';
  }

  // ControlValueAccessor
  writeValue(value: any) {
    if (this.element) {
      this.element.nativeElement.value = value;
      this.emit();
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
