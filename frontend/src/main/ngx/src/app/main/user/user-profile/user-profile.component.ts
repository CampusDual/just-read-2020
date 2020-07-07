import { Component, OnInit } from "@angular/core";

import { ApiService } from "app/api.service";
import { DomSanitizer } from "@angular/platform-browser";
import { UserResponse } from "app/model/user";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  userData: UserResponse;

  constructor(private api: ApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + image
    );
  }
}
