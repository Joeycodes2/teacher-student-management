import { NextRequest, NextResponse } from "next/server";
// import mongoose from "mongoose";
// import dbConnect from "@/db";

// const teacherSchema = new mongoose.Schema({
//   title: String,
//   name: String,
//   surname: String,
//   dob: Date,
//   NIN: Number,
//   phoneNumber: Number,
//   salary: Number,
// });

// const Teacher =
//   mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { title, name, surname, dob, NIN, phoneNumber, salary } =
      await req.json();

    console.log("Title: ", title);
    console.log("Name ", name);
    console.log("Surname ", surname);
    console.log("Dob ", dob);
    console.log("NIN ", NIN);
    console.log("Phone Number ", phoneNumber);
    console.log("Salary ", salary);

    // Validate Date of Birth
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    if (age < 21) {
      console.log({ message: "Age must be at least 21 and above." });
      return;
    }

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
