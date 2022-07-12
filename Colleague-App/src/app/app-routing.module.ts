import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleagueCreateComponent } from './colleague-create/colleague-create.component';

import { ColleagueListComponent } from './colleague-list/colleague-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'colleague-list',
    pathMatch: 'full'
  },
  {
    path: 'colleague-list',
    component: ColleagueListComponent
  },
  {
    path: 'colleague-create',
    component: ColleagueCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
