import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../shared/book';
import {faStar, faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'br-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {

  @Input() book: Book;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  faStar = faStar;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor() {
  }

  ngOnInit() {
  }

  getRatings() {
    return new Array(this.book.rating);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
