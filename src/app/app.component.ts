import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppQuery } from './state/app.query';
import { AppService } from './state/app.service';
import { AppState } from './state/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  store$: Observable<AppState>;

  constructor(private query: AppQuery, private service: AppService) {
    this.store$ = this.query.select();
  }

  ngOnDestroy() {
    this.service.resetStore();
  }
}
