import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ModalStore } from './modal.store';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private modalStore: ModalStore, private http: HttpClient) {}
}
