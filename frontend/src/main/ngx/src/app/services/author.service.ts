import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthorBooks, Authors } from "app/model/author";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthorService {
  private API = "http://localhost:33333/authors/";

  constructor(private http: HttpClient) {}

  getAuthorBooks(id: number) {
    const body = {
      filter: {
        author_id: id,
      },
      columns: ["b.book_title", "b.book_thumbnail", "b.book_id"],
      sqltypes: {},
    };

    return this.http
      .post<AuthorBooks>(this.API + "books/search", body)
      .pipe(catchError((error) => this.handleError(error)));
  }

  getAuthors() {
    const body = {
      filter: {},
      columns: ["author_first_name", "author_last_name", "author_id"],
      sqltypes: {},
    };

    return this.http
      .post<Authors>(this.API + "author/search", body)
      .pipe(catchError((error) => this.handleError(error)));
  }

  getAuthorById(id: number) {
    const body = {
      filter: {
        author_id: id,
      },
      columns: [
        "author_first_name",
        "author_last_name",
        "author_id",
        "description",
      ],
      sqltypes: {},
    };

    return this.http
      .post<Authors>(this.API + "author/search", body)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
