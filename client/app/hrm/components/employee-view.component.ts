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

  deleteEmployee(employee) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.employeeService.deleteEmployee(employee).subscribe(
        res => {
          const pos = this.employeeList.map(elem => { return elem._id; }).indexOf(employee._id);
          this.employeeList.splice(pos, 1);
        },
        error => console.log(error)
      );
    }
  }
}