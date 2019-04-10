import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookStoreService} from '../shared/book-store.service';
import {Book} from '../shared/book';
import {Observable} from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Output() rateBookUp = new EventEmitter<Book>();
  @Output() rateBookDown = new EventEmitter<Book>();

  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      this.bs.getSingle(isbn).subscribe(book => this.book = book);
    });
  }

  rateUp(book: Book) {
    this.rateBookUp.emit(book);
  }

  rateDown(book: Book) {
    this.rateBookDown.emit(book);
  }
}
