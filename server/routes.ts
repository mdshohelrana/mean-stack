import * as express from 'express';

import EmployeesCtrl from './controllers/employees';
import Employee from './models/employee.model';

export default function setRoutes(app) {

  const employees = new EmployeesCtrl();

  // APIs
  app.route('/api/employees').get(employees.getAll);
  app.route('/api/cats/count').get(employees.count);
  app.route('/api/employee').post(employees.insert);
  app.route('/api/employee/:id').get(employees.get);
  app.route('/api/employee/:id').put(employees.update);
  app.route('/api/employee/:id').delete(employees.delete);

}