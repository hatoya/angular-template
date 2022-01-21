import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControl, ControlValueAccessor } from '@ngneat/reactive-forms';
import { EFormStatus } from 'src/app/enum/form-status.enum';
import { IFile } from 'src/app/model/file.model';
import { ValidationMessageService } from 'src/app/service/validation-message.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements ControlValueAccessor<IFile[]>, OnInit {
  @Input() label = null;
  @Input() multiple = false;
  @Input() accept = '*';
  @Input() status = EFormStatus.EDITABLE;

  @ViewChild('file') element: ElementRef;

  innerFiles: File[] = [];
  required = false;

  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
    public validationMessageService: ValidationMessageService
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const validator = this.control?.control.validator;
    this.required = validator ? validator({} as AbstractControl<IFile[]>)?.required || false : false;
  }

  get isReadOnly() {
    return this.status === EFormStatus.READONLY;
  }

  get isDisabled() {
    return this.status === EFormStatus.DISABLED;
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    this.onChange(event.dataTransfer.files);
  }

  change(files: Blob[]) {
    this.innerFiles = [].concat(Array.from((files as any) || [])).map(file => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        file.path = fileReader.result;
        this.changeDetectorRef.detectChanges();
      });
      fileReader.readAsDataURL(file);
      return file;
    });
    this.onChange(this.innerFiles);
    this.onTouched();
  }

  // ControlValueAccessor
  writeValue(value: any) {
    if (this.element) {
      this.innerFiles = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
