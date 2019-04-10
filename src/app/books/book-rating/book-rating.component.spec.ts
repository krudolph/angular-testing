import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookRatingComponent} from './book-rating.component';
import {Book} from '../shared/book';
import {By} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('BookRatingComponent', () => {
  let component: BookRatingComponent;
  let fixture: ComponentFixture<BookRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookRatingComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRatingComponent);
    component = fixture.componentInstance;

    component.book = {
      description: '',
      isbn: '',
      rating: 1,
      title: ''
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
