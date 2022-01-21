import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateStore } from './date.store';

@Injectable({ providedIn: 'root' })
export class DateService {
  constructor(private dateStore: DateStore, private http: HttpClient) {}
}
