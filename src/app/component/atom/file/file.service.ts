import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor() {}

  getFileNames(items: File[] | string[]) {
    return items
      .map((item: File | string) => (typeof item === 'function' ? (item as File).name : (item as string).split('/').pop()))
      .join('、');
  }
}
