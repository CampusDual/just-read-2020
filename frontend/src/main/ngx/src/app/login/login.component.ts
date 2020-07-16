import { Component, OnInit, Inject, NgZone, Injector } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { DataServiceService } from "../data-service.service";

import {
  LoginService,
  NavigationService,
  APP_CONFIG,
  Config,
} from "ontimize-web-ngx";

@Component({
  selector: "login",
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: FormControl;
  password: FormControl;
  sessionExpired = false;
  username: any;

  router: Router;

  constructor(
    private actRoute: ActivatedRoute,
    private zone: NgZone,
    router: Router,
    @Inject(NavigationService) public navigation: NavigationService,
    @Inject(LoginService) private loginService: LoginService,
    public injector: Injector,
    private data: DataServiceService
  ) {
    this.router = router;

    const qParamObs: Observable<any> = this.actRoute.queryParams;
    qParamObs.subscribe((params) => {
      if (params) {
        const isDetail = params["session-expired"];
        if (isDetail === "true") {
          this.sessionExpired = true;
        } else {
          this.sessionExpired = false;
        }
      }
    });

    this.username = data.getUsername();
  }

  ngOnInit(): any {
    this.loginService.sessionExpired();
    this.navigation.setVisible(false);

    const userCtrl: FormControl = new FormControl("", Validators.required);
    const pwdCtrl: FormControl = new FormControl("", Validators.required);

    this.loginForm = new FormGroup({});
    this.loginForm.addControl("username", userCtrl);
    this.loginForm.addControl("password", pwdCtrl);

    // cambiar login service el método isLoginIn return true siempre

    // if (this.loginService.isLoggedIn()) {
    //   this.data.currentMessage.subscribe(message => this.username = message)
    //   this.router.navigate(['../'], { relativeTo: this.actRoute });
    // }

    this.data.currentMessage.subscribe((message) => (this.username = message));
  }

  newUsername() {
    this.data.changeMessage(this.username);
  }

  login() {
    if (!this.loginForm.valid) {
      alert("Campos no válidos");
    }

    const userName = this.loginForm.value["username"];
    const password = this.loginForm.value["password"];
    if (userName && userName.length > 0 && password && password.length > 0) {
      const self = this;
      this.loginService.login(userName, password).subscribe(() => {
        self.sessionExpired = false;
        self.router.navigate(["../"], { relativeTo: this.actRoute });
      }, this.handleError);
      localStorage.clear();
      localStorage.setItem("token", btoa(userName + ":" + password));
    }
  }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.error("Email or password is wrong.");
        break;
      default:
        break;
    }
  }
}
