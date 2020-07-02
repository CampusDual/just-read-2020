import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiService } from "app/api.service";
import { DomSanitizer } from '@angular/platform-browser';

import { BookResponse } from "app/model/book";

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"],
})
export class BooksDetailComponent implements OnInit {
  bookId: number;
  bookResponse: BookResponse;

  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private api: ApiService,
    private sanitizer:DomSanitizer
    ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.bookId = Number(params["book_id"]);
    });
    this.loadBook();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadBook() {
    this.api.getBookById(this.bookId).subscribe(data => {
      this.bookResponse = data;
    })
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + image);
  }
}
