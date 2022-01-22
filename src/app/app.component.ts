import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ETheme } from 'projects/lib/src/lib/enum/theme.enum';
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

  ngOnInit() {
    document.documentElement.setAttribute('theme', ETheme.LIGHT);
  }

  ngOnDestroy() {
    this.service.resetStore();
  }
}
