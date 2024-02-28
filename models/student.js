import mongoose, { Schema, models } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    NIN: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = models.Student || mongoose.model("Student", studentSchema);

export default Student;
