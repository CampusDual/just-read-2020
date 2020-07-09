import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {BookService} from "app/services/book.service";
import {DomSanitizer} from "@angular/platform-browser";

import {
    BookResponse,
    BooksAuthorsResponse,
    BookReviewsResponse,
    BookGenresResponse,
} from "app/model/book";

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

    private routeSub: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private api: BookService,
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
        this.routeSub = this.activatedRoute.params.subscribe((params) => {
            this.bookId = Number(params["book_id"]);
        });
        this.loadBook();
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }

    loadBook() {
        this.api.getBookById(this.bookId).subscribe((data) => {
            this.bookResponse = data;
            this.api.getBookAuthors(this.bookId).subscribe((data) => {
                this.authorsResponse = data;
            });
            this.api.getBooksReviews(this.bookId).subscribe((data) => {
                this.bookReviews = data;
                this.getScoreAvgReviews();
            });
            this.api.getBookGenres(this.bookId).subscribe((data) => {
                this.bookGenres = data;
            });
        });
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
