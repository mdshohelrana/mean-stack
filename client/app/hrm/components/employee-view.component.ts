import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
//import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'employee',
  templateUrl: '../templates/employee-view.component.html'
})
export class EmployeeViewComponent implements OnInit {

  employeeList = [];
  isLoading = true;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => this.employeeList = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  editEmployee() {

  }

  deleteEmployee() {

  }
}