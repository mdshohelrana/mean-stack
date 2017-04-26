import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//import { DataService } from '../services/data.service';
//import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'employee',
  templateUrl: '../templates/employee.component.html',
})
export class EmployeeComponent implements OnInit {

  //validations messages settings
  addEmployeeForm: FormGroup;
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  fullName = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  dateOfBirth = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  bio = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //build the form
    this.addEmployeeForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.fullName,
      title: this.title,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      bio: this.bio
    });
  }

  //add employee
  addEmployee(): void {

  }


}