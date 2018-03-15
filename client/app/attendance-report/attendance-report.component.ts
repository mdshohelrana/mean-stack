import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AttendanceService, EmployeeService } from '../shared/services';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {

  attendanceList = [];
  isLoading = true;

  constructor(private attendanceService: AttendanceService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getAttendances();
  }

  // getAttendances
  getAttendances() {
    this.attendanceService.getAttendances().subscribe(
      data => this.attendanceList = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // applyFilter
  applyFilter(filterValue: any) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.attendanceList.filter = filterValue;
  }

}
