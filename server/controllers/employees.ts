import Employee from '../models/employee.model';
import BaseCtrl from './base';

export default class EmployeesCtrl extends BaseCtrl {
  model = Employee;
}