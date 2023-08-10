import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ETheme } from './enum/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private service: AppService) {}

  ngOnInit() {
    document.documentElement.setAttribute('theme', ETheme.LIGHT);
  }

  ngOnDestroy() {}
}
