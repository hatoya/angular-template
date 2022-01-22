import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { IAccount } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class SentryService implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    console.error('ErrorHandler', error);
    Sentry.captureException(error.error || error.message || error.originalError || error);
  }

  setUser(account: IAccount) {
    Sentry.setUser(account ? { id: account.id, email: account.email, username: account.name, authority: account.authority } : null);
  }
}
