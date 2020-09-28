import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AccountEditStore } from './account-edit.store';

@Injectable({ providedIn: 'root' })
export class AccountEditService {
  constructor(private accountEditStore: AccountEditStore, private http: HttpClient) {}
}
