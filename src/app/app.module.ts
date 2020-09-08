import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ButtonComponent } from './component/atom/button/button.component';
import { CheckboxComponent } from './component/atom/checkbox/checkbox.component';
import { LoadingComponent } from './component/atom/loading/loading.component';
import { SelectComponent } from './component/atom/select/select.component';
import { TextComponent } from './component/atom/text/text.component';
import { TextareaComponent } from './component/atom/textarea/textarea.component';
import { ModalComponent } from './component/modal/modal.component';
import { CheckboxGroupComponent } from './component/molecule/checkbox-group/checkbox-group.component';
import { RadioGroupComponent } from './component/molecule/radio-group/radio-group.component';
import { FormComponent } from './component/page/form/form.component';
import { IndexComponent } from './component/page/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoadingComponent,
    FormComponent,
    TextComponent,
    TextareaComponent,
    SelectComponent,
    ButtonComponent,
    RadioGroupComponent,
    CheckboxGroupComponent,
    CheckboxComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' } }],
  bootstrap: [AppComponent]
})
export class AppModule {}
