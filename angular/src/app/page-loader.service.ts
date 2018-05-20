import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {

  constructor(private http: HttpClient) {
  }

  public loadMenschenPage(): Observable<string> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('X-Requested-With', 'text/html'); // necessary to use cors-anywhere
    return this.http.get('https://cors-anywhere.herokuapp.com/http://accso.de/menschen/', {
      headers: httpHeaders,
      responseType: 'text'
    });
  }
}
