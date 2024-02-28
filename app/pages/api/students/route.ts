import { connectMongoDB } from "@/lib/mongodb";
import Student from "@/models/student";
import { NextRequest, NextResponse } from "next/server";

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

    await connectMongoDB();
    await Student.create({
      name,
      surname,
      dob,
      NIN,
      phoneNumber,
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
