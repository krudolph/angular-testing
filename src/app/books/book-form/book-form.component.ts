import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  @Output() submitForm = new EventEmitter<Book>();

  constructor() {
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

    this.bookForm.get('title').valueChanges
      .subscribe(value => console.log(value));
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
