import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
//import { ToastComponent } from '../shared/toast/toast.component';

import { Employee } from '../models/employee';

@Component({
  selector: 'employee',
  templateUrl: '../templates/employee.component.html'
})
export class EmployeeComponent implements OnInit {

  titleList = [{ value: 1, text: "Mr" }, { value: 2, text: "Miss" }, { value: 3, text: "Mrs" }];
  model = new Employee();
  isEnableEditing = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    if (this.employeeService.employeeId) {
      this.getEmlpoyeeById();
      this.isEnableEditing = true;
    }
  }

  //add employee
  saveEmployee(): void {    
    if (this.employeeService.employeeId) {
      this.editEmployee(this.model);
    }
    else {
      this.addEmployee(this.model);
    }
  }

  addEmployee(employee): void {
    this.employeeService.addEmployee(employee).subscribe(
      res => {
        this.resetEmployee();
        //this.employeeForm.reset();        
      },
      error => console.log(error)
    );
    console.log("employee added");
  }

  editEmployee(employee): void {
    this.employeeService.editEmployee(employee).subscribe(
      res => {
        this.model = employee;
      },
      error => console.log(error)
    );
  }

  resetEmployee(): void {
    this.model = new Employee();
    console.log("reset");
  }

  getEmlpoyeeById(): void {
    this.employeeService.getEmployee(this.employeeService.employeeId).subscribe(
      data => this.mapEmployee(data),
      error => console.log(error),
      () => true
    );
  }

  mapEmployee(emp) {
    this.model = emp;
  }

}