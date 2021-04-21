import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styleUrls: ['./button-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
