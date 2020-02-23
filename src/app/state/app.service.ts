import { Injectable } from '@angular/core';
import { AppStore } from './app.store';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private appStore: AppStore) {}

  switchLoadingFlag(flag: boolean) {
    this.appStore.setLoading(flag);
  }

  resetStore() {
    this.appStore.reset();
  }
}
