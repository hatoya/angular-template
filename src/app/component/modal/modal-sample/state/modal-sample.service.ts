import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalSampleStore } from './modal-sample.store';

@Injectable({ providedIn: 'root' })
export class ModalSampleService {
  constructor(private modalSampleStore: ModalSampleStore, private http: HttpClient) {}
}
