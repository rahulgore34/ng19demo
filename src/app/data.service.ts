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

  post() {
    const awsurl = 'https://co1ztmqvif.execute-api.ap-south-1.amazonaws.com/';

    return this.http.post(awsurl, {email:'rahulgore34@gmail.com'});
  }
}
