import { connectMongoDB } from "@/lib/mongodb";
import Teacher from "@/models/teacher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectMongoDB();
    const { NIN } = await req.json();

    console.log("This is NIN ", NIN);

    const teacher = await Teacher.findOne({ NIN }).select("_id");
    console.log("This is teacherID: ", teacher);

    return NextResponse.json({ teacher });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "teacher not found" });
  }
}
