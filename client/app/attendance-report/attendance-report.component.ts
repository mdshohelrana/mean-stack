import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

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

  displayedColumns = ['employeeID', 'attendDate', 'attendType', 'overTimeHour'];
  dataSource = new MatTableDataSource(this.attendanceList);

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
      data => this.dataSource.data = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // applyFilter
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
