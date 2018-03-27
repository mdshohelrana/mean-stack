import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  // Get all
  getAll(url: any): Observable<any> {
    return this.http.get(url).map(res => res.json());
  }

  // Count all
  count(url: any): Observable<any> {
    return this.http.get(url).map(res => res.json());
  }

  // add
  add(url: any, entity: any): Observable<any> {
    return this.http.post(url, JSON.stringify(entity), this.options);
  }

  // Get by id
  getById(url: any, entity: any): Observable<any> {
    return this.http.get(url + `/${entity._id}`).map(res => res.json());
  }

  // Update by id
  editById(url: any, entity: any): Observable<any> {
    return this.http.put(url + `/${entity._id}`, JSON.stringify(entity), this.options);
  }

  // Delete by id
  deleteById(url: any, entity: any): Observable<any> {
    return this.http.delete(url + `/${entity._id}`, this.options);
  }

}
