import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiService } from "app/api.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Authors, AuthorBooks } from "app/model/author";
import { loadAuthorsModule } from "app/main/main-routing.module";

@Component({
  selector: "app-authors-detail",
  templateUrl: "./authors-detail.component.html",
  styleUrls: ["./authors-detail.component.scss"],
})
export class AuthorsDetailComponent implements OnInit {
  authorId: number;
  author: Authors;
  books: AuthorBooks;

  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.authorId = Number(params["author_id"]);
    });
    this.loadAuthor();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  loadAuthor() {
    this.api.getAuthorById(this.authorId).subscribe((data) => {
      this.author = data;
      this.api.getAuthorBooks(this.authorId).subscribe((data) => {
        this.books = data;
      });
    });
  }

  getImageSrc(image: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + image
    );
  }
}
