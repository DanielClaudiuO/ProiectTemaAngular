import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  public books: Book[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Book[]>(baseUrl + 'api/books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
}

interface Book {
  id: string;
  name: string;
  author: string;
  firstEdition: number;
}
