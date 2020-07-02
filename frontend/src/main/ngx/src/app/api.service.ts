import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { BookResponse, BooksAuthorsResponse } from "./model/book";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_SERVER = "http://localhost:33333";

  constructor(private http: HttpClient) {}

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
      .post<BookResponse>(this.API_SERVER + "/books/book/search", body)
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
        this.API_SERVER + "/books/bookAuthors/search",
        body
      )
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
