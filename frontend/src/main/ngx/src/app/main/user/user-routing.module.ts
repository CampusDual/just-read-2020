import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListsComponent } from './user-lists/user-lists.component';

const routes: Routes = [
  {
    path: "profile",
    component: UserProfileComponent,
  },
  {
    path: "lists",
    component: UserListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
