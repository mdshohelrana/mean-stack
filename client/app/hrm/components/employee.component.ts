import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from '../../_common/services/common.base-data.service';
//import { ToastComponent } from '../shared/toast/toast.component';

import { Employee } from '../models/employee';

@Component({
  selector: 'employee',
  templateUrl: '../templates/employee.component.html'
})
export class EmployeeComponent implements OnInit {

  titleList = [{ value: 1, text: "Mr" }, { value: 2, text: "Miss" }, { value: 3, text: "Mrs" }];
  model = new Employee();

  ngOnInit(): void {

  }

  //add employee
  addEmployee(): void {
    this.dataService.addEmployee(this.model).subscribe(
      res => {
        this.resetEmployee();
        this.employeeForm.reset();
        //this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
    console.log("employee added");
  }

  resetEmployee(): void {
    model = new Employee();
    console.log("reset");
  }

}