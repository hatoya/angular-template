import { Injectable } from '@angular/core';
import { IndexStore } from './index.store';

@Injectable({ providedIn: 'root' })
export class IndexService {
  constructor(private indexStore: IndexStore) {}

  // Akita
  updateLoading(loading: boolean) {
    this.indexStore.update({ loading });
  }

  resetStore() {
    this.indexStore.reset();
  }
}
