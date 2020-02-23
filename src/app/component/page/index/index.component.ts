import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexState } from './state/index.store';
import { IndexQuery } from './state/index.query';
import { IndexService } from './state/index.service';

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
