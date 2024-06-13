import { connectMongoDB } from "@/lib/mongodb";
import Student from "@/models/student";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectMongoDB();
    const { NIN } = await req.json();

    console.log("This is NIN ", NIN);

    const student = await Student.findOne({ NIN }).select("_id");
    console.log("This is studentID: ", student);

    return NextResponse.json({ student });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "student not found" });
  }
}
