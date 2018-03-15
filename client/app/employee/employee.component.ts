import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { EmployeeService } from '../shared/services';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = {};
  employeeList = [];
  isLoading = true;
  isEditing = false;

  addEmployeeForm: FormGroup;
  employeeID = new FormControl('', Validators.required);
  shiftStartTime = new FormControl('', Validators.required);
  shiftEndTime = new FormControl('', Validators.required);
  overTimeAmountPerHour = new FormControl('', Validators.required);
  salary = new FormControl('', Validators.required);

  constructor(private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) { }

  // ngOnInit
  ngOnInit() {
    this.getEmployees();
    this.addEmployeeForm = this.formBuilder.group({
      employeeID: this.employeeID,
      shiftStartTime: this.shiftStartTime,
      shiftEndTime: this.shiftEndTime,
      overTimeAmountPerHour: this.overTimeAmountPerHour,
      salary: this.salary,
    });
  }

  // getEmployees
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => this.employeeList = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // addEmployess
  addEmployess(): void {
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(
      res => {
        const newEmp = res.json();
        this.employeeList.push(newEmp);
        this.addEmployeeForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  // enableEditing
  enableEditing(employee: any): void {

  }

  // enableEditing
  deleteEmployee(employee: any): void {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.employeeService.deleteEmployee(employee).subscribe(
        res => {
          const pos = this.employeeList.map(elem => elem._id).indexOf(employee._id);
          this.employeeList.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
