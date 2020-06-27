import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private sanitizer:DomSanitizer
  ) {}

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + image);
  }
}
