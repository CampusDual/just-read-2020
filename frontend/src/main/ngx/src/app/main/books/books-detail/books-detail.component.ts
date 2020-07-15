import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BookService } from "app/services/book.service";
import { ListService } from "app/services/list.service";
import { DomSanitizer } from "@angular/platform-browser";
import { OUserInfoService } from "ontimize-web-ngx";
import { ToastrService } from "ngx-toastr";

import {
  BookResponse,
  BooksAuthorsResponse,
  BookReviewsResponse,
  BookGenresResponse,
} from "app/model/book";
import { ListResponse, ListBooks } from "app/model/list";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"],
})
export class BooksDetailComponent implements OnInit {
  bookId: number;
  bookResponse: BookResponse;
  authorsResponse: BooksAuthorsResponse;
  bookReviews: BookReviewsResponse;
  bookGenres: BookGenresResponse;
  score: number;
  count: number;
  user = this.userInfo.getUserInfo().username;
  listsResponse: ListResponse;
  listId: number;
  check: boolean;
  listBook: ListBooks = {
    list_id: this.listId,
    book_id: this.bookId,
  };

  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private listService: ListService,
    private sanitizer: DomSanitizer,
    @Inject(OUserInfoService) private userInfo: OUserInfoService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.bookId = Number(params["book_id"]);
    });
    this.loadBook();
    if (this.userInfo.getUserInfo().username != undefined) {
      this.loadLists();
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadBook() {
    this.bookService.getBookById(this.bookId).subscribe((data) => {
      this.bookResponse = data;
      this.bookService.getBookAuthors(this.bookId).subscribe((data) => {
        this.authorsResponse = data;
      });
      this.bookService.getBooksReviews(this.bookId).subscribe((data) => {
        this.bookReviews = data;
        this.getScoreAvgReviews();
      });
      this.bookService.getBookGenres(this.bookId).subscribe((data) => {
        this.bookGenres = data;
      });
    });
  }

  loadLists() {
    this.listService.getUserLists().subscribe((data) => {
      this.listsResponse = data;
      if (this.listsResponse.data.length) {
        this.check = true;
      } else {
        this.check = false;
      }
    });
  }

  saveInList() {
    let verifyInsert = false;
    this.listBook.book_id = this.bookId;
    this.listBook.list_id = this.listId;

    this.listService.addBookToList(this.listBook).subscribe(
      () => {
        verifyInsert = true;
        this.toastrService.success("Libro guardado correctamente.", "Éxito");
      },
      (error) => {
        if (this.listId == undefined) {
          this.toastrService.error(
            "Recuerda que tienes que escoger una lista",
            "Error!"
          );
          verifyInsert = true;
        }
        if (!verifyInsert) {
          this.toastrService.warning(
            "Ya tienes este libro guardado en la lista",
            "Aviso"
          );
        }
      }
    );
  }

  getScoreAvgReviews() {
    this.count = 0;
    this.score = 0;
    this.bookReviews.data.forEach((rate) => {
      this.score += rate.review_score;
      this.count++;
    });
    return this.score / this.count;
  }

  isNaN(value: number) {
    return Number.isNaN(value);
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + image
    );
  }
}
