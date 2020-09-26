import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginStore } from './login.store';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private loginStore: LoginStore, private http: HttpClient) {}
}
