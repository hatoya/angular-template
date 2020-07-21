import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FormStore } from './form.store';

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private formStore: FormStore, private http: HttpClient) {}
}
