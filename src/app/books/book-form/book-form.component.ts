import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../shared/book';
import {filter} from 'rxjs/internal/operators/filter';
import {debounceTime, distinctUntilChanged, mergeMap, takeUntil} from 'rxjs/operators';
import {BookStoreService} from '../shared/book-store.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnDestroy {

  bookForm: FormGroup;

  @Output() submitForm = new EventEmitter<Book>();

  private destroy$ = new Subject();

  private results$ = new Observable<Book[]>();

  constructor(private bs: BookStoreService) {
  }

  ngOnInit() {

    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl(),
      description: new FormControl(),
      subtitle: new FormControl(),
      thumbnails: new FormArray([
        new FormGroup({
          url: new FormControl('https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'),
          title: new FormControl('Fred')
        })

      ])
    });

    this.results$ = this.bookForm.get('title').valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap(term => this.bs.search(term)),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  get thumbnails() {
    return this.bookForm.get('thumbnails');
  }

  isInvalid(field: string) {
    const element = this.bookForm.get(field);
    return element.dirty && element.invalid;
  }

  onSubmit() {
    this.submitForm.emit({...this.bookForm.value, rating: 1});
  }

}
