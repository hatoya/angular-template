import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/page/form/form.component';
import { IndexComponent } from './component/page/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
