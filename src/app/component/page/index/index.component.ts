import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, OnDestroy {
  constructor(private service: IndexService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}
