import { Injectable } from '@angular/core';
import { IndexStore } from './index.store';

@Injectable({ providedIn: 'root' })
export class IndexService {
  constructor(private store: IndexStore) {}
}
