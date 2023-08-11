import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { faCheck, faExclamationTriangle, faInfo, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { EMessageType } from 'src/app/enum/message-type.enum';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ transform: 'translate(20px, 0)', opacity: 0 }),
        animate(100, style({ transform: 'translate(0, 0)', opacity: 1 }))
      ]),
      transition(':leave', [animate(200, style({ transform: 'translate(-20px, 0)', opacity: 0 }))])
    ])
  ]
})
export class SnackbarComponent implements OnInit, OnDestroy {
  messageTypeEnum = EMessageType;
  faInfo = faInfo;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;
  faTimes = faTimes;

  constructor(public service: SnackbarService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}
