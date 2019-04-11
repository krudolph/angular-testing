import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {BookComponent} from './book/book.component';
import {BookRatingComponent} from './book-rating/book-rating.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ButtonSharedModule} from '../button-shared/button-shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookFormComponent} from './book-form/book-form.component';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  declarations: [
    BookComponent,
    BookRatingComponent,
    DashboardComponent,
    BookDetailsComponent,
    CreateBookComponent,
    BookFormComponent,
    RepeatDirective
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class BooksModule {
}
