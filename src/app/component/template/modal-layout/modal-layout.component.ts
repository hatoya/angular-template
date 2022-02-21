import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EButtonType } from 'src/app/enum/button-type.enum';
import { ModalService } from '../../modal/state/modal.service';

@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalLayoutComponent implements OnInit {
  @Input() loading = false;

  buttonTypeEnum = EButtonType;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
