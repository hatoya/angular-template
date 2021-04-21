import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import { IFile } from 'src/app/model/file.model';
import { IOption } from 'src/app/model/option.model';

interface ISample {
  text: string;
  email: string;
  number: string;
  date: string;
  month: string;
  textarea: string;
  select: string;
  checkbox: string[];
  radiobox: string;
  files: IFile[];
}

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, AfterViewInit {
  formGroup: FormGroup<ISample>;
  options: IOption<string, string>[] = [
    { value: 'option1', label: 'Option1' },
    { value: 'option2', label: 'Option2' },
    { value: 'option3', label: 'Option3' },
    { value: 'option4', label: 'Option4' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      date: ['', [Validators.required]],
      month: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: [[], [Validators.required]],
      radiobox: ['', [Validators.required]],
      files: [[], [Validators.required]]
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.formGroup.patchValue({ text: 'TEXT' });
  }

  submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      scroll(0, 0);
      return;
    }
    console.log(this.formGroup.value);
  }
}
