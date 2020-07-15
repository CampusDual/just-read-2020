import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { UserRoutingModule } from "./user-routing.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserListsComponent } from "./user-lists/user-lists.component";
import { UserListDetailComponent } from "./user-lists/user-list-detail/user-list-detail.component";

@NgModule({
  imports: [CommonModule, UserRoutingModule, OntimizeWebModule],
  declarations: [
    UserProfileComponent,
    UserListsComponent,
    UserListDetailComponent,
  ],
})
export class UserModule {}
