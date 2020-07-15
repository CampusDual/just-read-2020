import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import { LoginService, OUserInfoService } from "ontimize-web-ngx";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  username: any;

  constructor(
    @Inject(LoginService) private loginService: LoginService,
    @Inject(OUserInfoService) private userInfo: OUserInfoService
  ) {}

  ngOnInit() {
    this.username = this.userInfo.getUserInfo().username;
  }

  closeSession() {
    this.loginService.logoutWithConfirmationAndRedirect();
    localStorage.clear();
  }
}
