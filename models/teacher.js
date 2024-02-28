import mongoose, { Schema, models } from "mongoose";

const teacherSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
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
    salary: {
      type: String,
    },
  },
  { timestamps: true }
);

const Teacher = models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;
