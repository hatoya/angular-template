import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
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
import { LoadingComponent } from './component/atom/loading/loading.component';
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
    ButtonWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAnalyticsModule
  ],
  providers: [
    DatePipe,
    ScreenTrackingService,
    UserTrackingService
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
