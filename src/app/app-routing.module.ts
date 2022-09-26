import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "add-user",
    pathMatch : "full"
  },
  {
    path : "add-user",
    component : FormComponent
  },
  {
    path : "user-list",
    component : UserlistComponent
  },
  {
    path : "user-list/edit-user/:id",
    component : FormComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
