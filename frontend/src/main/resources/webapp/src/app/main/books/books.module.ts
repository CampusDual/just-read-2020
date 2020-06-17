import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    BooksRoutingModule
  ],
  declarations: []
})
export class BooksModule { }
