import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() popup = '';

  @Output() clickButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.clickButton.emit();
  }
}
