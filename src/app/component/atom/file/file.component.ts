import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { EFormStatus } from 'src/app/enum/form-status.enum';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements ControlValueAccessor, OnInit {
  @Input() label = null;
  @Input() multiple = false;
  @Input() accept = '*';
  @Input() status = EFormStatus.EDITABLE;

  @ViewChild('file') element: ElementRef;

  innerFiles: File[] = [];
  required = false;

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  constructor(@Self() @Optional() public control: NgControl, private changeDetectorRef: ChangeDetectorRef) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const validator = this.control?.control.validator;
    this.required = validator ? validator({} as AbstractControl)?.required || false : false;
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
