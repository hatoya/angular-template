import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { EFileType } from '../enum/file-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {
  constructor(private storage: Storage) {}

  createReference() {
    Object.values(EFileType).map(fileType => ref(this.storage, fileType));
  }

  upload(fileType: EFileType, file: File) {
    return from(uploadBytes(ref(this.storage, `${fileType}/${uuidv4()}/${file.name}`), file)).pipe(map(snapshot => snapshot.ref.fullPath));
  }

  getDownloadUrl$(path: string): Observable<string> {
    return from(getDownloadURL(ref(this.storage, path)));
  }
}
