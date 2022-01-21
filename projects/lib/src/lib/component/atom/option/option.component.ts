import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'lib-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent implements OnInit {
  faEllipsisH = faEllipsisH;

  constructor() {}

  ngOnInit(): void {}
}
