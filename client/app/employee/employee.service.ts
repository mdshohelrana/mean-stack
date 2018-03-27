import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../shared/services';

@Injectable()
export class EmployeeService {

  private getUrl = '/api/employees';
  private saveUrl = '/api/employee';

  constructor(private baseService: BaseService) { }

  getEmployees(): Observable<any> {
    return this.baseService.getAll(this.getUrl);
  }

  countEmployees(): Observable<any> {
    return this.baseService.count(this.getUrl);
  }

  addEmployee(employee): Observable<any> {
    return this.baseService.add(this.saveUrl, employee);
  }

  getEmployee(employee): Observable<any> {
    return this.baseService.getById(this.saveUrl, employee);
  }

  editEmployee(employee): Observable<any> {
    return this.baseService.editById(this.saveUrl, employee);
  }

  deleteEmployee(employee): Observable<any> {
    return this.baseService.deleteById(this.saveUrl, employee);
  }

}

