import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
