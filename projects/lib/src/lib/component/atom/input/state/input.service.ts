import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InputStore } from './input.store';

@Injectable({ providedIn: 'root' })
export class InputService {
  constructor(private inputStore: InputStore, private http: HttpClient) {}
}
