import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SwcharService {

  private observable: Observable;
  private data: any;

  constructor(private httpClient: HttpClient) { }

  getChar() {
    const url = 'https://swapi.co/api/people/1';

    // RxJS .pipe() method uses the 'share()' operator to share the source among multiple subscribers
    this.observable = this.httpClient.get(url).pipe(share());

    // RxJS .pipe() method uses the 'tab()' operator to log data
    this.observable.pipe(tap(data => console.log(data)),).subscribe(data => this.data = data);
    return this.observable;
  }
}
