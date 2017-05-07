import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAll(url): Observable<any> {
    return this.http.get(url).map(res => res.json());
  }

  count(url): Observable<any> {
    return this.http.get(url).map(res => res.json());
  }

  insert(url, employee): Observable<any> {
    return this.http.post(url, JSON.stringify(employee), this.options);
  }

  get(url): Observable<any> {
    return this.http.get(url).map(res => res.json());
  }

  edit(url, employee): Observable<any> {
    return this.http.put(url, JSON.stringify(employee), this.options);
  }

  delete(url): Observable<any> {
    return this.http.delete(url, this.options);
  }
}