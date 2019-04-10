import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {Book} from '../shared/book';
import {BookRatingService} from '../shared/book-rating.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BookStoreService} from '../shared/book-store.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let bookRatingMock;
  let bookStoreMock;
  let book: Book;
  let books: Book[];

  beforeEach(() => {

    book = {
      description: '',
      subtitle: '',
      isbn: '',
      rating: 1,
      title: '',
      firstThumbnailUrl: ''
    };

    bookRatingMock = {
      rateUp: () => book,
      rateDown: () => book
    };

    books = [
      {isbn: '1', subtitle: '', description: 'abc', title: 'book1', rating: 5, firstThumbnailUrl: ''},
      {isbn: '2', subtitle: '', description: 'abc', title: 'book2', rating: 4, firstThumbnailUrl: ''},
      {isbn: '3', subtitle: '', description: 'abc', title: 'book2', rating: 1, firstThumbnailUrl: ''}
    ];

    bookStoreMock = {
      getAll: () => books
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: BookRatingService, useValue: bookRatingMock},
        {provide: BookStoreService, useValue: bookStoreMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp', () => {

    const rs = TestBed.get(BookRatingService);

    spyOn(rs, 'rateUp').and.callThrough();

    component.rateUp(book);

    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });

});
