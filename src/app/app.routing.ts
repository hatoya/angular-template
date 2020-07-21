import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/page/index/index.component';
import { FormComponent } from './component/page/form/form.component';

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
