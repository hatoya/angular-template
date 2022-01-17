import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { from } from 'rxjs';
import { ECollection } from '../enum/collection.enum';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  constructor(private functions: Functions) {}

  createAccount$(uid: string, email: string) {
    return from(httpsCallable<any, { uid: string }>(this.functions, 'createAccount')({ uid, email }));
  }

  deleteAccount$(uid: string) {
    return from(httpsCallable<any, { uid: string }>(this.functions, 'deleteAccount')({ uid }));
  }

  createBundle$(collection: ECollection) {
    return from(httpsCallable<any, void>(this.functions, 'createBundle')({ collection }));
  }
}
