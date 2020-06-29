import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsExploreComponent } from './authors-explore/authors-explore.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    AuthorsExploreComponent
  ]
})
export class AuthorsModule { }
