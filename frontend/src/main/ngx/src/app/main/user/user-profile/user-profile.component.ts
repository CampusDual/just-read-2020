import { Component, OnInit } from "@angular/core";

import { UserService } from "app/services/user.service";
import { DomSanitizer } from "@angular/platform-browser";
import { User } from "app/model/user";

import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  userData: User;

  inputCurrentPassword: String;
  inputNewPassword: String;

  // Image to base64
  imgFile: any;
  imgBase64: string;
  json = {};

  constructor(
    private api: UserService,
    private sanitizer: DomSanitizer,
    private toastrService: ToastrService
  ) {}

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

  public pickedImg(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.imgFile = file;
      // Turn into Base64
      this.handleInputChange(file);
    }
  }

  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("Invalid format");
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(",") + 1);
    this.imgBase64 = base64result;
  }

  updatePicture() {
    console.log(this.imgBase64);
    if (this.imgBase64 != undefined) {
      this.api.updateUserPicture(this.imgBase64).subscribe((data) => {
        this.ngOnInit();
        this.toastrService.success(
          "Foto de perfil cambiada correctamente.",
          "Éxito"
        );
      });
    } else {
      this.toastrService.error("Tienes que seleccionar una imagen", "Error");
    }
  }
}
