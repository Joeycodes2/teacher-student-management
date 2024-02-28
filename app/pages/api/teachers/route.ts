import { connectMongoDB } from "@/lib/mongodb";
import Teacher from "@/models/teacher";
import { NextRequest, NextResponse } from "next/server";

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

    await connectMongoDB();
    await Teacher.create({
      title,
      name,
      surname,
      dob,
      NIN,
      phoneNumber,
      salary,
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
