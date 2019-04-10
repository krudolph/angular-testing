import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {BookRatingComponent} from '../book-rating/book-rating.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BookComponent', () => {

  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent, BookRatingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      description: '',
      subtitle: '',
      isbn: '',
      rating: 1,
      title: '',
      firstThumbnailUrl: ''
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
