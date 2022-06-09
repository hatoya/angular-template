import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationStore } from './pagination.store';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  constructor(private paginationStore: PaginationStore, private http: HttpClient) {}
}
