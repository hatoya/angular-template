import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { EFormLayout } from '../../../enum/form-layout.enum';
import { EFormStatus } from '../../../enum/form-status.enum';
import { IOption } from '../../../model/option.model';
import { ValidationService } from '../../../service/validation.service';

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
  @Input() layout = EFormLayout.DEFAULT;

  @ViewChild('select') element: ElementRef;

  faChevronDown = faChevronDown;

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

  emit() {
    this.changeDetectorRef.detectChanges();
  }

  get required() {
    const validator = this.control?.control.validator;
    return validator ? validator({} as FormControl)?.required || false : false;
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
