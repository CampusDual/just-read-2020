import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {AuthorBooks} from "../model/author";
import {Genres} from "../model/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private API = "http://localhost:33333/genres/";

  constructor(private http: HttpClient) {
  }

  getGenreBooks(id: number) {
    const body = {
      filter: {
        genre_id: id,
      },
      columns: ["b.book_title", "b.book_thumbnail", "b.book_id"],
      sqltypes: {},
    };

    return this.http
        .post<AuthorBooks>(this.API + "books/search", body)
        .pipe(catchError((error) => this.handleError(error)));
  }

  getGenres() {
    const body = {
      filter: {},
      columns: ["genre_name", "genre_id"],
      sqltypes: {},
    };

    return this.http
        .post<Genres>(this.API + "genre/search", body)
        .pipe(catchError((error) => this.handleError(error)));
  }

  getGenreById(id: number) {
    const body = {
      filter: {
        genre_id: id,
      },
      columns: ["genre_id", "genre_name"],
      sqltypes: {},
    };

    return this.http
        .post<Genres>(this.API + "genre/search", body)
        .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
