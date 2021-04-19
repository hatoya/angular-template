import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/page/index/index.component';
import { SampleComponent } from './component/page/sample/sample.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'sample', component: SampleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
