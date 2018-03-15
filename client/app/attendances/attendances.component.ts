import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AttendanceService, EmployeeService } from '../shared/services';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.scss']
})
export class AttendancesComponent implements OnInit {

  attendance = {};
  attendanceList = [];
  attendTypeList = [];
  employeeList = [];
  isLoading = true;
  isEditing = false;

  addAttendanceForm: FormGroup;
  employeeID = new FormControl('', Validators.required);
  attendDate = new FormControl('', Validators.required);
  attendType = new FormControl('', Validators.required);
  overTimeHour = new FormControl('', Validators.required);

  constructor(private attendanceService: AttendanceService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getEmployees();
    this.getAttendances();
    this.addAttendanceForm = this.formBuilder.group({
      employeeID: this.employeeID,
      attendDate: this.attendDate,
      attendType: this.attendType,
      overTimeHour: this.overTimeHour
    });

    this.attendTypeList.push(
      { value: 1, viewValue: 'Half Day' }
      , { value: 2, viewValue: 'Full Day' });
  }

  // getEmployees
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => this.employeeList = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // getAttendances
  getAttendances() {
    this.attendanceService.getAttendances().subscribe(
      data => this.attendanceList = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // addAttendance
  addAttendance() {
    this.attendanceService.addAttendance(this.addAttendanceForm.value).subscribe(
      res => {
        const newCat = res.json();
        this.attendanceList.push(newCat);
        this.addAttendanceForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  // enableEditing
  enableEditing(cat) {
    this.isEditing = true;
    this.attendance = cat;
  }

  // cancelEditing
  cancelEditing() {
    this.isEditing = false;
    this.attendance = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getAttendances();
  }

  // getAttendance
  getAttendance(attendance) {
    this.attendanceService.getAttendance(attendance).subscribe(
      res => {
        this.isEditing = false;
        this.attendance = attendance;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  // deleteAttendance
  deleteAttendance(attendance) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.attendanceService.deleteAttendance(attendance).subscribe(
        res => {
          const pos = this.attendanceList.map(elem => elem._id).indexOf(attendance._id);
          this.attendanceList.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
