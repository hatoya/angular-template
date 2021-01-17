import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { faFlag, faUser } from '@fortawesome/pro-duotone-svg-icons';
import { LoginComponent } from './component/modal/login/login.component';
import { SigninComponent } from './component/modal/signin/signin.component';
import { ModalService } from './component/modal/state/modal.service';
import { AppQuery } from './state/app.query';
import { AppService } from './state/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  faFlag = faFlag;
  faUser = faUser;

  constructor(public query: AppQuery, private service: AppService, private modalService: ModalService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.service.resetStore();
  }

  signin() {
    this.modalService.open(SigninComponent);
  }

  login() {
    this.modalService.open(LoginComponent);
  }
}
