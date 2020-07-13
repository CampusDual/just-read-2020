import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserResponse } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private API = "http://localhost:33333/users/";

  constructor(private http: HttpClient) {}

  getUserData() {
    const header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + localStorage.getItem("token"),
      }),
    };

    return this.http
      .get<UserResponse>(this.API + "username", header)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
