import Employee from '../models/employee';
import BaseCtrl from './base';

export default class EmployeeCtrl extends BaseCtrl {
  model = Employee;
}
