import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import {SearchResultsHomeComponent} from './search-results-home/search-results-home.component';

import { OntimizeWebModule } from "ontimize-web-ngx";

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    SearchResultsHomeComponent
  ]
})
export class SearchResultsModule { }
