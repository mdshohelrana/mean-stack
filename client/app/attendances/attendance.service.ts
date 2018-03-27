import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../shared/services';

@Injectable()
export class AttendanceService {

  private getUrl = '/api/attendances';
  private saveUrl = '/api/attendance';

  constructor(private baseService: BaseService) { }

  getAttendances(): Observable<any> {
    return this.baseService.getAll(this.getUrl);
  }

  countAttendances(): Observable<any> {
    return this.baseService.count(this.saveUrl + '/count').map(res => res.json());
  }

  addAttendance(attendance: any): Observable<any> {
    return this.baseService.add(this.saveUrl, attendance);
  }

  getAttendance(attendance: any): Observable<any> {
    return this.baseService.getById(this.saveUrl, attendance).map(res => res.json());
  }

  editAttendance(attendance: any): Observable<any> {
    return this.baseService.editById(this.saveUrl, attendance);
  }

  deleteAttendance(attendance: any): Observable<any> {
    return this.baseService.deleteById(this.saveUrl, attendance);
  }

}
