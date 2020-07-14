import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserListsComponent } from "./user-lists/user-lists.component";
import { UserListDetailComponent } from "./user-lists/user-list-detail/user-list-detail.component";

const routes: Routes = [
  {
    path: "profile",
    component: UserProfileComponent,
  },
  {
    path: "lists",
    component: UserListsComponent,
  },
  {
    path: "list/:list_id",
    component: UserListDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
