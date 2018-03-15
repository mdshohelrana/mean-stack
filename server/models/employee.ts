import * as mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeID: String,
  shiftStartTime: String,
  shiftEndTime: String,
  overTimeAmountPerHour: Number,
  salary: Number,
  createUserID: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
