import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';

import { OntimizeWebModule } from "ontimize-web-ngx";

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    OntimizeWebModule
  ],
  declarations: []
})
export class SearchResultsModule { }
