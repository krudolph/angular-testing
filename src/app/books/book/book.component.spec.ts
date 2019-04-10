import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {BookRatingComponent} from '../book-rating/book-rating.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('BookComponent', () => {

  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent, BookRatingComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
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

//   it('should emit rate up event', () => {
// component.rateUp.subs
//   });

});
