import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChildren } from '@angular/core';
import { AbstractControl,  NgControl } from '@angular/forms';
import { faCheckSquare, faSquare } from '@fortawesome/pro-regular-svg-icons';
import { ControlValueAccessor } from '@ngneat/reactive-forms';
import { EFormLayout } from '../../../enum/form-layout.enum';
import { EFormStatus } from '../../../enum/form-status.enum';
import { IOption } from '../../../model/option.model';
import { ValidationService } from '../../../service/validation.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() label = null;
  @Input() options: IOption<any, any>[] = [];
  @Input() status = EFormStatus.EDITABLE;
  @Input() layout = EFormLayout.DEFAULT;

  @ViewChildren('checkbox') elements: ElementRef[] = [];

  faSquare = faSquare;
  faCheckSquare = faCheckSquare;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
    public validationMessageService: ValidationService
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

  get required() {
    const validator = this.control?.control?.validator;
    return validator ? validator({} as AbstractControl)?.required || false : false;
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
      this.elements.map(element => element.nativeElement).forEach(element => (element.checked = (values || []).includes(element.value)));
      this.changeDetectorRef.detectChanges();
    });
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
