import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../model/user";
import { OUserInfoService } from "ontimize-web-ngx";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private API = "http://localhost:33333/users/";

  constructor(
    private http: HttpClient,
    @Inject(OUserInfoService) private userInfo: OUserInfoService
  ) {}

  getUserData() {
    const header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + localStorage.getItem("token"),
      }),
    };

    const body = {
      filter: {
        USER_: this.userInfo.getUserInfo().username,
      },
      columns: ["PICTURE", "NAME", "SURNAME", "USER_", "EMAIL"],
      sqltypes: {},
    };

    return this.http
      .post<User>(this.API + "user/search", body, header)
      .pipe(catchError((error) => this.handleError(error)));
  }

  updateUserPicture(img: string) {
    const header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + localStorage.getItem("token"),
      }),
    };

    const body = {
      filter: {
        user_: this.userInfo.getUserInfo().username,
      },
      data: {
        picture: img,
      },
    };

    console.log(body);

    return this.http
      .put(this.API + "user", body, header)
      .pipe(catchError((error) => this.handleError(error)));
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
