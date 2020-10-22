import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { environment } from 'src/environments/environment';
import { IAccount } from '../model/account.model';

Sentry.init({
  dsn: 'https://55f8148dd8d94a24bb560ca39312c9c4@o458742.ingest.sentry.io/5477902',
  environment: environment.production ? 'Production' : 'Development',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', `https://${environment.firebase.projectId}.web.app`],
      routingInstrumentation: Sentry.routingInstrumentation
    })
  ],
  maxBreadcrumbs: 50,
  tracesSampleRate: 1.0,
  logLevel: 3
});

@Injectable({
  providedIn: 'root'
})
export class SentryService implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    const eventId = Sentry.captureException(error.originalError || error);
    if (Error instanceof HttpErrorResponse) {
      console.log(error.status);
    } else {
      Sentry.showReportDialog({ eventId });
    }
  }

  setUser(account: IAccount) {
    Sentry.setUser(account ? { id: account.id, email: account.email, username: account.name, authority: account.authority } : null);
  }
}
