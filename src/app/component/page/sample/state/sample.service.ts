import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SampleStore } from './sample.store';

@Injectable({ providedIn: 'root' })
export class SampleService {
  constructor(private sampleStore: SampleStore, private http: HttpClient) {}
}
