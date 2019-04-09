import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {BookComponent} from './book/book.component';
import {BookRatingComponent} from './book-rating/book-rating.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ButtonSharedModule} from '../button-shared/button-shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BookComponent,
    BookRatingComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    FontAwesomeModule
  ]
})
export class BooksModule {
}
