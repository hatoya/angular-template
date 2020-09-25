import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountIndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
