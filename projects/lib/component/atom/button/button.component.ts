import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() type = 'default';
  @Input() popup = '';
  @Input() isDisabled = false;

  @Output() clickButton = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.clickButton.emit();
  }
}
