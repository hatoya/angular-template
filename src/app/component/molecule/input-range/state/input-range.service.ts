import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InputRangeStore } from './input-range.store';

@Injectable({ providedIn: 'root' })
export class InputRangeService {
  constructor(private inputRangeStore: InputRangeStore, private http: HttpClient) {}
}
