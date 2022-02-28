import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalSampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
