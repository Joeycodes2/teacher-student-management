import mongoose, { Schema, models } from "mongoose";

const teacherSchema = new Schema(
  {
    title: {
      type: string,
      required: true,
    },
    name: {
      type: string,
      required: true,
    },
    surname: {
      type: string,
      required: true,
    },
    dob: {
      type: string,
      required: true,
    },
    NIN: {
      type: string,
      required: true,
    },
    phoneNumber: {
      type: string,
      required: true,
    },
    salary: {
      type: string,
    },
  },
  { timestamps: true }
);

const Teacher = models.Teacher || mongoose.model("Teacher", teacherSchema);

export default Teacher;
