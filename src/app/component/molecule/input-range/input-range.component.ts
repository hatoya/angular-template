import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
