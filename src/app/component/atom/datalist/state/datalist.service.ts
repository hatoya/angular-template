import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatalistStore } from './datalist.store';

@Injectable({ providedIn: 'root' })
export class DatalistService {
  constructor(private datalistStore: DatalistStore, private http: HttpClient) {}
}
