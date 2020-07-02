import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { BookResponse } from "./model/book";

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
        "book_thumbnail"
      ],
      sqltypes: {},
    };
    console.log(body)
    return this.http
      .post<BookResponse>(this.API_SERVER + "/books/book/search", body)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
