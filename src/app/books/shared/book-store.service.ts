import {Injectable} from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule/secure';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/books/${isbn}`);
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/books`, book, {responseType: 'text'});
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books/search/${term}`).pipe(
      map(rawBooks => (rawBooks ? rawBooks : []))
    );
  }
}
