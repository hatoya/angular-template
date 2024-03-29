import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FirestorageService } from 'src/app/service/firestorage.service';
import { EFormLayout } from '../../../enum/form-layout.enum';
import { EFormStatus } from '../../../enum/form-status.enum';
import { ValidationService } from '../../../service/validation.service';
import { FileService } from './file.service';

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
  @Input() layout = EFormLayout.DEFAULT;

  @ViewChild('file') element: ElementRef;

  innerFiles: (File | string)[] = [];
  onChange: (value: any) => void;
  onTouched: () => void;

  constructor(
    @Self() @Optional() public control: NgControl,
    private changeDetectorRef: ChangeDetectorRef,
    public validationMessageService: ValidationService,
    public service: FileService,
    public firestorageService: FirestorageService
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

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

  emit() {
    this.changeDetectorRef.detectChanges();
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    this.onChange(event.dataTransfer.files);
  }

  change(files: FileList) {
    this.innerFiles = [].concat(Array.from((files as any) || [])).map(file => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        file.path = fileReader.result;
        this.emit();
      });
      fileReader.readAsDataURL(file);
      return file;
    });
    this.onChange(this.innerFiles);
    this.onTouched();
    this.emit();
  }

  download(item: File | string) {
    if (this.service.isFile(item)) return;
    this.firestorageService.getDownloadUrl$(item as string).subscribe({
      next: url => {
        open(url);
      },
      error: error => {
        console.error(error);
      }
    });
  }

  // ControlValueAccessor
  writeValue(value: any) {
    if (this.element) {
      this.innerFiles = value;
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
