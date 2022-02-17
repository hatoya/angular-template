import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { TAccount } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class SentryService implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    console.error('ErrorHandler', error);
    Sentry.captureException(error.error || error.message || error.originalError || error);
  }

  setUser(account: TAccount) {
    Sentry.setUser(account ? { id: account.id, email: account.email, username: account.name, role: account.role } : null);
  }
}
