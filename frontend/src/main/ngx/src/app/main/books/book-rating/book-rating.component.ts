import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }


}
