import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {GenreService} from "app/services/genre.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Genres, GenreBooks} from "app/model/genre";

@Component({
  selector: 'app-genres-detail',
  templateUrl: './genres-detail.component.html',
  styleUrls: ['./genres-detail.component.scss']
})
export class GenresDetailComponent implements OnInit {

  genreId: number;
  genre: Genres;
  books: GenreBooks;

  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: GenreService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.genreId = Number(params["genre_id"]);
  });
  this.loadGenre();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
}

loadGenre() {
  this.api.getGenreById(this.genreId).subscribe((data) => {
      this.genre = data;
      this.api.getGenreBooks(this.genreId).subscribe((data) => {
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
