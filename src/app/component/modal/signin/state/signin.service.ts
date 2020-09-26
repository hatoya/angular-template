import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SigninStore } from './signin.store';

@Injectable({ providedIn: 'root' })
export class SigninService {
  constructor(private signinStore: SigninStore, private http: HttpClient) {}
}
