import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IOption } from 'src/app/model/option.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  categoryOptions: IOption<string, string>[] = [
    { value: 'aaa', label: 'AAA' },
    { value: 'bbb', label: 'BBB' },
    { value: 'ccc', label: 'CCC' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
}
