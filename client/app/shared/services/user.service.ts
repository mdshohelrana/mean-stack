import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../services/base.service';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  private getUrl = '/api/users';
  private saveUrl = '/api/user';

  constructor(private http: Http, private baseService: BaseService) { }

  register(user: any): Observable<any> {
    return this.baseService.add(this.saveUrl, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post('/api/login', JSON.stringify(credentials), this.options);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.getUrl).map(res => res.json());
  }

  countUsers(): Observable<any> {
    return this.http.get(this.getUrl + '/count').map(res => res.json());
  }

  addUser(user): Observable<any> {
    return this.http.post('/api/user', JSON.stringify(user), this.options);
  }

  getUser(user: any): Observable<any> {
    return this.http.get(this.saveUrl + `/${user._id}`).map(res => res.json());
  }

  editUser(user: any): Observable<any> {
    return this.http.put(this.saveUrl + `/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user: any): Observable<any> {
    return this.http.delete(this.saveUrl + `/${user._id}`, this.options);
  }

}
