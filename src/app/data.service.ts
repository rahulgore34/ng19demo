import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/';
  http =  inject(HttpClient);
  constructor() { }

  getData(str: string): Observable<any> {

    return this.http.get(`${this.url}${str}`);
  }
}
