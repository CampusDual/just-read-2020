import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { BooksRoutingModule } from './books-routing.module';
import {BooksHomeComponent} from './books-home/books-home.component'

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksHomeComponent
  ]
})
export class BooksModule { }
