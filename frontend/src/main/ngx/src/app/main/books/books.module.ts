import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { BooksRoutingModule } from './books-routing.module';
import {BooksHomeComponent} from './books-home/books-home.component';
import {BooksDetailComponent } from './books-detail/books-detail.component';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { BookReviewComponent } from './book-review/book-review.component'

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksHomeComponent,
    BooksDetailComponent,
    BookRatingComponent,
    BookReviewComponent
  ]
})
export class BooksModule { }
