import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {IsAuthenticatedGuard} from '../is-authenticated.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'create', component: CreateBookComponent},
  {path: ':isbn', component: BookDetailsComponent, canActivate: [IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
