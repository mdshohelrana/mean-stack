import * as mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  employeeID: String,
  attendDate: Date,
  attendType: String,
  overTimeHour: Number,
  createUserID: Number
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
