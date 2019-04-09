import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {BookRatingService} from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  url = 'www.dataport.de';

  constructor(private rs: BookRatingService) {
  }

  ngOnInit() {
    this.books = [
      {isbn: '123456798', description: 'Lirumlarum', title: 'book1', rating: 5},
      {isbn: '555444666', description: 'Lalala', title: 'book2', rating: 4},
      {isbn: '99554311', description: 'Test123', title: 'book3', rating: 3},
      {isbn: '9955511', description: 'Test123', title: 'book4', rating: 2},
      {isbn: '9956511', description: 'Test123', title: 'book5', rating: 1},
      {isbn: '9957511', description: 'Test123', title: 'book6', rating: 1},

    ];
  }

  trackBook(index: number, book: Book) {
    return book.isbn;
  }

  rateUp(book: Book) {
    const updated = this.rs.rateUp(book);
    this.updateBookList(updated);
  }

  rateDown(book: Book) {
    const updated = this.rs.rateDown(book);
    this.updateBookList(updated);
  }

  updateBookList(book: Book) {
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);
  }

}
