import {TestBed} from '@angular/core/testing';

import {BookRatingService} from './book-rating.service';
import {Book} from './book';

describe('BookRatingService', () => {

  let book: Book;
  let service: BookRatingService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {

    book = {
      description: '',
      subtitle: '',
      isbn: '',
      rating: 3,
      title: '',
      firstThumbnailUrl: ''
    };

    service = TestBed.get(BookRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up', () => {
    expect(service.rateUp(book).rating).toBe(4);
  });

  it('should rate down', () => {
    expect(service.rateDown(book).rating).toBe(2);
  });

  it('should rate up to 5 and not higher', () => {
    book.rating = 5;
    expect(service.rateUp(book).rating).toBe(5);

  });

  it('should rate down to 1 and not lower', () => {
    book.rating = 1;
    expect(service.rateDown(book).rating).toBe(1);
  });

});
