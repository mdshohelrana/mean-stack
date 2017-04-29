import * as mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  fullName: String,
  titleId: Number,
  dateOfBirth: Date,
  address: String,
  bio: String
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;