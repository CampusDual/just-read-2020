import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ListResponse } from "../model/list";
import { OUserInfoService } from "ontimize-web-ngx";

@Injectable({
  providedIn: "root",
})
export class ListService {
  private API = "http://localhost:33333/lists/";

  constructor(
    private http: HttpClient,
    @Inject(OUserInfoService) private userInfo: OUserInfoService
  ) {}

  getUserLists() {
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
      columns: [
        "list_id",
        "l.list_name",
        "l.list_description",
        "l.list_create_date",
      ],
      sqltypes: {},
    };

    return this.http
      .post<ListResponse>(this.API + "user/search", body, header)
      .pipe(catchError((error) => this.handleError(error)));
  }

  deleteList(id: number) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + localStorage.getItem("token"),
      }),
      body: {
        filter: {
          list_id: id,
        },
      },
    };

    return this.http
      .delete(this.API + "list", options)
      .pipe(catchError((error) => this.handleError(error)));
  }

  newList(name: string, description: string) {
    const header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + localStorage.getItem("token"),
      }),
    };

    const body = {};
  }

  handleError(error: HttpErrorResponse) {
    console.log("Something went wrong!");
    return throwError(error);
  }
}
