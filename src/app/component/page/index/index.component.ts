import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexQuery } from './state/index.query';
import { IndexService } from './state/index.service';
import { IndexState } from './state/index.store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, OnDestroy {
  store$: Observable<IndexState>;

  constructor(private query: IndexQuery, private service: IndexService) {
    this.store$ = this.query.select();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.service.resetStore();
  }
}
