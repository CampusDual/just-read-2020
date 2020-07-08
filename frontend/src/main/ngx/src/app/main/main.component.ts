import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import { DataServiceService } from "app/data-service.service";
import { LoginService } from "ontimize-web-ngx";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  username: any;

  constructor(
    private data: DataServiceService,
    @Inject(LoginService) private loginService: LoginService
  ) {
    this.username = data.getUsername();
  }

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.username = message));
  }

  newUsername() {
    this.data.changeMessage(this.username);
  }

  closeSession() {
    this.loginService.logoutWithConfirmationAndRedirect();
    localStorage.clear();
  }
}
