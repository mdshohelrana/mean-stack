import * as express from 'express';

import UserCtrl from './controllers/user';
import EmployeeCtrl from './controllers/employee';
import AttendanceCtrl from './controllers/attendance';

import User from './models/user';
import Employee from './models/employee';
import Attendance from './models/attendance';

export default function setRoutes(app) {

  const router = express.Router();

  const employeeCtrl = new EmployeeCtrl();
  const attendanceCtrl = new AttendanceCtrl();
  const userCtrl = new UserCtrl();

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Employee
  router.route('/employees').get(employeeCtrl.getAll);
  router.route('/employees/count').get(employeeCtrl.count);
  router.route('/employee').post(employeeCtrl.insert);
  router.route('/employee/:id').get(employeeCtrl.get);
  router.route('/employee/:id').put(employeeCtrl.update);
  router.route('/employee/:id').delete(employeeCtrl.delete);

  // Attendaces
  router.route('/attendances').get(attendanceCtrl.getAll);
  router.route('/attendances/count').get(attendanceCtrl.count);
  router.route('/attendance').post(attendanceCtrl.insert);
  router.route('/attendance/:id').get(attendanceCtrl.get);
  router.route('/attendance/:id').put(attendanceCtrl.update);
  router.route('/attendance/:id').delete(attendanceCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
