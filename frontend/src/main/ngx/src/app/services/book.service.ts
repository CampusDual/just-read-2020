import {Injectable} from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

import {
    BookResponse,
    BooksAuthorsResponse,
    BookReviewsResponse,
    BookGenresResponse,
} from "app/model/book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private API = "http://localhost:33333/books/";

    constructor(private http: HttpClient) {
    }

    getBookById(id: number) {
        const body = {
            filter: {
                book_id: id,
            },
            columns: [
                "book_id",
                "book_title",
                "book_isbn",
                "book_description",
                "book_launch_date",
                "book_thumbnail",
            ],
            sqltypes: {},
        };

        return this.http
            .post<BookResponse>(this.API + "book/search", body)
            .pipe(catchError((error) => this.handleError(error)));
    }

    getBooks() {
        const body = {
            filter: {},
            columns: [
                "book_id",
                "book_title",
                "book_isbn",
                "book_description",
                "book_launch_date",
                "book_thumbnail",
            ],
            sqltypes: {},
        };

        return this.http
            .post<BookResponse>(this.API + "book/search", body)
            .pipe(catchError((error) => this.handleError(error)));
    }

    getBookAuthors(id: number) {
        const body = {
            filter: {
                book_id: id,
            },
            columns: ["a.author_first_name", "a.author_last_name"],
            sqltypes: {},
        };

        return this.http
            .post<BooksAuthorsResponse>(
                this.API + "bookAuthors/search",
                body
            )
            .pipe(catchError((error) => this.handleError(error)));
    }

    getBookGenres(id: number) {
        const body = {
            filter: {
                book_id: id,
            },
            columns: ["g.genre_name"],
            sqltypes: {},
        };

        return this.http
            .post<BookGenresResponse>(
                this.API + "bookGenres/search",
                body
            )
            .pipe(catchError((error) => this.handleError(error)));
    }

    getBooksReviews(id: number) {
        const body = {
            filter: {
                book_id: id,
            },
            columns: [
                "r.review_text",
                "r.is_spoiler",
                "r.review_last_update",
                "r.review_create_date",
                "r.review_text",
                "r.review_score",
                "u.user_",
                "u.picture",
            ],
            sqltypes: {},
        };

        return this.http
            .post<BookReviewsResponse>(
                this.API + "bookReviews/search",
                body
            )
            .pipe(catchError((error) => this.handleError(error)));
    }

    handleError(error: HttpErrorResponse) {
        console.log("Something went wrong!");
        return throwError(error);
    }
}
