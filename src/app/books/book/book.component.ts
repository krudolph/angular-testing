import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../shared/book';
import {BookRatingService} from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  @Output() rateBookUp = new EventEmitter<Book>();
  @Output() rateBookDown = new EventEmitter<Book>();

  constructor() {
  }

  ngOnInit() {
  }

  rateUp(book: Book) {
    this.rateBookUp.emit(book);
  }

  rateDown(book: Book) {
    this.rateBookDown.emit(book);
  }

}
