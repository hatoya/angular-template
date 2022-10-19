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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ButtonComponent } from './component/atom/button/button.component';
import { CheckboxComponent } from './component/atom/checkbox/checkbox.component';
import { DatalistComponent } from './component/atom/datalist/datalist.component';
import { FileComponent } from './component/atom/file/file.component';
import { InputComponent } from './component/atom/input/input.component';
import { LoadingComponent } from './component/atom/loading/loading.component';
import { OptionComponent } from './component/atom/option/option.component';
import { PaginationComponent } from './component/atom/pagination/pagination.component';
import { RadioboxComponent } from './component/atom/radiobox/radiobox.component';
import { RangeComponent } from './component/atom/range/range.component';
import { SelectComponent } from './component/atom/select/select.component';
import { TableComponent } from './component/atom/table/table.component';
import { TextareaComponent } from './component/atom/textarea/textarea.component';
import { ModalSampleComponent } from './component/modal/modal-sample/modal-sample.component';
import { ModalComponent } from './component/modal/modal.component';
import { ButtonWrapperComponent } from './component/molecule/button-wrapper/button-wrapper.component';
import { InputRangeComponent } from './component/molecule/input-range/input-range.component';
import { IndexComponent } from './component/page/index/index.component';
import { SampleComponent } from './component/page/sample/sample.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { ModalLayoutComponent } from './component/template/modal-layout/modal-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModalComponent,
    ModalLayoutComponent,
    SampleComponent,
    ButtonWrapperComponent,
    ButtonComponent,
    CheckboxComponent,
    FileComponent,
    InputComponent,
    LoadingComponent,
    OptionComponent,
    RadioboxComponent,
    SelectComponent,
    TableComponent,
    TextareaComponent,
    DatalistComponent,
    SnackbarComponent,
    InputRangeComponent,
    RangeComponent,
    ModalSampleComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...(environment.id === 'local' ? [AkitaNgDevtools.forRoot()] : []),
    AkitaNgRouterStoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.id === 'local') {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.id === 'local') {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
    provideStorage(() => {
      const storage = getStorage();
      if (environment.id === 'local') {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    }),
    provideFunctions(() => {
      const functions = getFunctions();
      if (environment.id === 'local') {
        connectFunctionsEmulator(functions, 'localhost', 5001);
      }
      return functions;
    }),
    provideAnalytics(() => getAnalytics()),
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
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
