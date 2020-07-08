import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "app/api.service";
import { BookResponse } from "app/model/book";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  books: BookResponse;
  indexArray = [];

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private api: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getBooks();
  }

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  getBooks() {
    this.api.getBooks().subscribe((data) => {
      this.books = data;
      this.fillWithRandomIndexArray();
      console.log(this.indexArray)
    });
  }

  fillWithRandomIndexArray() {
    while (true) {
      let exists = false;
      let index = this.getRandomInt(this.books.data.length);
      if (this.indexArray == undefined || this.indexArray.length == 0) {
        this.indexArray.push(index);
      }
      for (let i = 0; i < this.indexArray.length; i++) {
        if (index == this.indexArray[i]) {
          exists = true;
        }
      }
      if (!exists) {
        this.indexArray.push(index);
      }
      if (this.indexArray.length == 3) {
        break;
      }
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + image
    );
  }
}
