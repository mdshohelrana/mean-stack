import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getEmployees(): Observable<any> {
    return this.http.get('/api/employees').map(res => res.json());
  }

  countEmployees(): Observable<any> {
    return this.http.get('/api/employees/count').map(res => res.json());
  }

  addEmployee(employee): Observable<any> {
    return this.http.post('/api/employee', JSON.stringify(employee), this.options);
  }

  getEmployee(employee): Observable<any> {
    return this.http.get(`/api/employee/${employee._id}`).map(res => res.json());
  }

  editEmployee(employee): Observable<any> {
    return this.http.put(`/api/employee/${employee._id}`, JSON.stringify(employee), this.options);
  }

  deleteEmployee(employee): Observable<any> {
    return this.http.delete(`/api/employee/${employee._id}`, this.options);
  }

}

