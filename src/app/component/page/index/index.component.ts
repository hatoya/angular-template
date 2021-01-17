import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IndexQuery } from './state/index.query';
import { IndexService } from './state/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, OnDestroy {
  constructor(public query: IndexQuery, private service: IndexService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.service.resetStore();
  }
}
