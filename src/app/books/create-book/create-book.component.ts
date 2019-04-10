import {Component, OnInit} from '@angular/core';
import {BookStoreService} from '../shared/book-store.service';
import {Book} from '../shared/book';
import {Router} from '@angular/router';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(private rt: Router, private bs: BookStoreService) {
  }

  ngOnInit() {
  }

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.rt.navigateByUrl('/books');
    });
  }
}
