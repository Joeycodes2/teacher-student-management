import { NextRequest, NextResponse } from "next/server";
// import mongoose from "mongoose";
// import dbConnect from "@/db";

// const studentSchema = new mongoose.Schema({
//   name: String,
//   surname: String,
//   dob: Date,
//   NIN: Number,
//   phoneNumber: Number,
// });

// const Student =
//   mongoose.models.Student || mongoose.model("Student", studentSchema);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, surname, dob, NIN, phoneNumber } = await req.json();

    console.log("Name ", name);
    console.log("surname ", surname);
    console.log("Dob ", dob);
    console.log("NIN ", NIN);
    console.log("Phone Number ", phoneNumber);

    // Validate Date of Birth
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    if (age > 22) {
      console.log({ message: "Age may not be more than 22." });
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
