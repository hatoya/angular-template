import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ETheme } from './enum/theme.enum';
import { AppQuery } from './state/app.query';
import { AppService } from './state/app.service';
import { AppStore } from './state/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public query: AppQuery, private service: AppService, private store: AppStore) {}

  ngOnInit() {
    document.documentElement.setAttribute('theme', ETheme.LIGHT);
  }

  ngOnDestroy() {
    this.store.reset();
  }
}
