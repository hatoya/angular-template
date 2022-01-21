import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberStore } from './number.store';

@Injectable({ providedIn: 'root' })
export class NumberService {
  constructor(private numberStore: NumberStore, private http: HttpClient) {}
}
