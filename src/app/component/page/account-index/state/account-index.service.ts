import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AccountIndexStore } from './account-index.store';

@Injectable({ providedIn: 'root' })
export class AccountIndexService {
  constructor(private accountIndexStore: AccountIndexStore, private http: HttpClient) {}
}
