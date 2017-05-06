import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { DataService } from '../../_common/services/common.base-data.service';

@Injectable()
export class EmployeeService {

    constructor(private dataService: DataService) { }

    getEmployees(): Observable<any> {
        return this.dataService.getAll('/api/employees');
    }

    countEmployees(): Observable<any> {
        return this.dataService.count('/api/employees/count');
    }

    addEmployee(employee): Observable<any> {
        return this.dataService.insert('/api/employee', employee);
    }

    getEmployee(employee): Observable<any> {
        return this.dataService.get(`/api/employee/${employee._id}`);
    }

    editEmployee(employee): Observable<any> {
        return this.dataService.edit(`/api/employee/${employee._id}`, employee);
    }

    deleteEmployee(employee): Observable<any> {
        return this.dataService.delete(`/api/employee/${employee._id}`);
    }
}