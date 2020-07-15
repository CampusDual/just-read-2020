import { Component, OnInit, Input } from "@angular/core";
import { Review } from "app/model/book";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-book-review",
  templateUrl: "./book-review.component.html",
  styleUrls: ["./book-review.component.scss"],
})
export class BookReviewComponent implements OnInit {
  @Input() review: Review;
  showSpoiler = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + image
    );
  }
}
