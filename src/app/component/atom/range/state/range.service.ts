import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RangeStore } from './range.store';

@Injectable({ providedIn: 'root' })
export class RangeService {
  constructor(private rangeStore: RangeStore, private http: HttpClient) {}
}
