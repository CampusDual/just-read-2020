import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "app/api.service";
import { BookResponse } from "app/model/book";
import { DomSanitizer } from "@angular/platform-browser";
import { Authors, AuthorBooks } from "app/model/author";
import { Genres, GenreBooks } from "app/model/genre";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  books: BookResponse;
  firstBook: BookResponse;
  secondBook: BookResponse;
  thirdBook: BookResponse;

  authors: Authors;
  authorBooks: AuthorBooks;

  genres: Genres;
  genreBooks: GenreBooks;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private api: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getAuthor();
    this.getBooks();
    this.getGenres();
  }

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  getGenres() {
    this.api.getGenres().subscribe((data) => {
      this.genres = data;
      let id = this.getRandomInt(this.genres.data.length);
      this.api.getGenreBooks(id).subscribe((data) => {
        this.genreBooks = data;
      });
      this.api.getGenreById(id).subscribe((data) => {
        this.genres = data;
      });
    });
  }

  getAuthor() {
    this.api.getAuthors().subscribe((data) => {
      this.authors = data;
      let id = this.getRandomInt(this.authors.data.length);
      this.api.getAuthorBooks(id).subscribe((data) => {
        this.authorBooks = data;
      });
      this.api.getAuthorById(id).subscribe((data) => {
        this.authors = data;
      });
    });
  }

  getBooks() {
    this.api.getBooks().subscribe((data) => {
      this.books = data;
      let index = this.fillWithRandomIndexArray(this.books.data.length);
      this.api.getBookById(index[0]).subscribe((data) => {
        this.firstBook = data;
      });
      this.api.getBookById(index[1]).subscribe((data) => {
        this.secondBook = data;
      });
      this.api.getBookById(index[2]).subscribe((data) => {
        this.thirdBook = data;
      });
    });
  }

  fillWithRandomIndexArray(items: number) {
    let indexArray = [];
    while (true) {
      let exists = false;
      let index = this.getRandomInt(items);
      if (indexArray == undefined || indexArray.length == 0) {
        indexArray.push(index);
      }
      for (let i = 0; i < indexArray.length; i++) {
        if (index == indexArray[i]) {
          exists = true;
        }
      }
      if (!exists) {
        indexArray.push(index);
      }
      if (indexArray.length == 3) {
        break;
      }
    }
    return indexArray;
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
