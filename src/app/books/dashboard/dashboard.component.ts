import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {BookRatingService} from '../shared/book-rating.service';
import {BookStoreService} from '../shared/book-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Observable<Book[]>;
  booksSize = 0;
  url = 'www.dataport.de';

  constructor(private rs: BookRatingService, private bs: BookStoreService) {
  }

  ngOnInit(): void {
    this.books = this.bs.getAll();
    this.books.subscribe(books => this.booksSize = books.length);
  }

  trackBook(index: number, book: Book) {
    return book.isbn;
  }

  rateUp(book: Book) {
    const updated = this.rs.rateUp(book);
  }

  rateDown(book: Book) {
    const updated = this.rs.rateDown(book);
  }

}
