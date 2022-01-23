import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './component/atom/button/button.component';
import { CheckboxComponent } from './component/atom/checkbox/checkbox.component';
import { FileComponent } from './component/atom/file/file.component';
import { InputComponent } from './component/atom/input/input.component';
import { LoadingComponent } from './component/atom/loading/loading.component';
import { OptionComponent } from './component/atom/option/option.component';
import { RadioboxComponent } from './component/atom/radiobox/radiobox.component';
import { SelectComponent } from './component/atom/select/select.component';
import { TableComponent } from './component/atom/table/table.component';
import { TextareaComponent } from './component/atom/textarea/textarea.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    FileComponent,
    InputComponent,
    LoadingComponent,
    OptionComponent,
    RadioboxComponent,
    SelectComponent,
    TableComponent,
    TableComponent,
    TextareaComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    FileComponent,
    InputComponent,
    LoadingComponent,
    OptionComponent,
    RadioboxComponent,
    SelectComponent,
    TableComponent,
    TableComponent,
    TextareaComponent
  ]
})
export class LibModule {
  public static forRoot(environment: any, validation: any): ModuleWithProviders<any> {
    return {
      ngModule: LibModule,
      providers: [
        {
          provide: 'environment',
          useValue: environment
        },
        {
          provide: 'validation',
          useValue: validation
        }
      ]
    };
  }
}
