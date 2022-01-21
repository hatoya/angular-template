import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ButtonComponent } from './component/atom/button/button.component';
import { CheckboxComponent } from './component/atom/checkbox/checkbox.component';
import { DateComponent } from './component/atom/date/date.component';
import { FileComponent } from './component/atom/file/file.component';
import { LoadingComponent } from './component/atom/loading/loading.component';
import { NumberComponent } from './component/atom/number/number.component';
import { OptionComponent } from './component/atom/option/option.component';
import { RadioboxComponent } from './component/atom/radiobox/radiobox.component';
import { SelectComponent } from './component/atom/select/select.component';
import { TableComponent } from './component/atom/table/table.component';
import { TextComponent } from './component/atom/text/text.component';
import { TextareaComponent } from './component/atom/textarea/textarea.component';
import { ModalComponent } from './component/modal/modal.component';
import { ButtonWrapperComponent } from './component/molecule/button-wrapper/button-wrapper.component';
import { IndexComponent } from './component/page/index/index.component';
import { SampleComponent } from './component/page/sample/sample.component';
import { ModalLayoutComponent } from './component/template/modal-layout/modal-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoadingComponent,
    TextComponent,
    TextareaComponent,
    SelectComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent,
    ModalLayoutComponent,
    OptionComponent,
    RadioboxComponent,
    SampleComponent,
    TableComponent,
    ButtonWrapperComponent,
    FileComponent,
    DateComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (!environment.production) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (!environment.production) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
    provideStorage(() => {
      const storage = getStorage();
      if (!environment.production) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    }),
    provideFunctions(() => {
      const functions = getFunctions();
      if (!environment.production) {
        connectFunctionsEmulator(functions, 'localhost', 5001);
      }
      return functions;
    }),
    provideAnalytics(() => getAnalytics()),
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
    // {
    //   provide: ErrorHandler,
    //   useClass: SentryService
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
