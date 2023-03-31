import { Injectable } from '@angular/core';
import { FirestorageService } from 'src/app/service/firestorage.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private firestorageService: FirestorageService) {}

  isFile(item: File | string) {
    return typeof item === 'object';
  }

  getFileName(item: File | string) {
    return this.isFile(item) ? (item as File).name : this.firestorageService.getFileName(item as string);
  }
}
