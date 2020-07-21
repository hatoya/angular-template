import { Injectable } from '@angular/core';
import { IndexStore } from './index.store';

@Injectable({ providedIn: 'root' })
export class IndexService {
  constructor(private indexStore: IndexStore) {}

  // Akita
  updateLoading(flag: boolean) {
    this.indexStore.setLoading(flag);
  }

  resetStore() {
    this.indexStore.reset();
  }
}
