import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.id !== 'local') {
  enableProdMode();
}

// Sentry.init({
//   dsn: 'https://55f8148dd8d94a24bb560ca39312c9c4@o458742.ingest.sentry.io/5477902',
//   environment: environment.production ? 'Production' : 'Development',
//   integrations: [
//     new Integrations.BrowserTracing({
//       tracingOrigins: ['localhost', `https://${environment.firebase.projectId}.web.app`]
//     })
//   ],
//   maxBreadcrumbs: 50,
//   tracesSampleRate: 1.0
// });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
