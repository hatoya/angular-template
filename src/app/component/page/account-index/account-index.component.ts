import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppQuery } from 'src/app/state/app.query';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountIndexComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, public appQuery: AppQuery) {
    this.formGroup = this.formBuilder.group({ authority: '' });
  }

  ngOnInit(): void {}
}
