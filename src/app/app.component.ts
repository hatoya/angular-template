import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AppQuery } from './state/app.query';
import { AppService } from './state/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public query: AppQuery, private service: AppService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.service.resetStore();
  }
}
