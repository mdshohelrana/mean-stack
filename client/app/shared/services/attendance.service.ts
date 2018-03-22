import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../services/base.service';

@Injectable()
export class AttendanceService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  private getUrl = '/api/attendances';
  private saveUrl = '/api/attendance';

  constructor(private http: Http, private baseService: BaseService) { }

  getAttendances(): Observable<any> {
    return this.baseService.getAll(this.getUrl);
  }

  countAttendances(): Observable<any> {
    return this.baseService.count(this.saveUrl + '/count').map(res => res.json());
  }

  addAttendance(cat): Observable<any> {
    return this.http.post('/api/attendance', JSON.stringify(cat), this.options);
  }

  getAttendance(cat): Observable<any> {
    return this.http.get(`/api/attendance/${cat._id}`).map(res => res.json());
  }

  editAttendance(cat): Observable<any> {
    return this.http.put(`/api/attendance/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteAttendance(cat): Observable<any> {
    return this.http.delete(`/api/attendance/${cat._id}`, this.options);
  }

}
