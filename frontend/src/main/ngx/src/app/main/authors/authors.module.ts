import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsExploreComponent } from './authors-explore/authors-explore.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';
@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    AuthorsExploreComponent,
    AuthorsDetailComponent
  ]
})
export class AuthorsModule { }
