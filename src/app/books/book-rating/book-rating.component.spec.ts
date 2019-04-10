import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookRatingComponent} from './book-rating.component';
import {Book} from '../shared/book';
import {By} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BookRatingComponent', () => {
  let component: BookRatingComponent;
  let fixture: ComponentFixture<BookRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookRatingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRatingComponent);
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

  it('should emit rate up event', () => {

    let eventBook: Book;

    component.rateUp.subscribe(book => {
      eventBook = book;
    });

    component.doRateUp();

    expect(eventBook).toBeTruthy();
    expect(eventBook).toBe(component.book);
  });

  it('should call method for button click', () => {

    spyOn(component, 'doRateUp');

    const rateUpBtn = fixture.debugElement
      .query(By.css('[data-testing-id="rateUpBtn"]'))
      .nativeElement;

    rateUpBtn.click();

    expect(component.doRateUp).toHaveBeenCalledTimes(1);
  });

});
