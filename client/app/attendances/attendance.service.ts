import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../shared/services';

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

  addAttendance(attendance: any): Observable<any> {
    return this.http.post('/api/attendance', JSON.stringify(attendance), this.options);
  }

  getAttendance(attendance: any): Observable<any> {
    return this.http.get(`/api/attendance/${attendance._id}`).map(res => res.json());
  }

  editAttendance(attendance: any): Observable<any> {
    return this.http.put(`/api/attendance/${attendance._id}`, JSON.stringify(attendance), this.options);
  }

  deleteAttendance(attendance: any): Observable<any> {
    return this.http.delete(`/api/attendance/${attendance._id}`, this.options);
  }

}
