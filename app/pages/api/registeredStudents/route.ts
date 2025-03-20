import { connectMongoDB } from "@/lib/mongodb";
import Student from "@/models/student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    try {
      await connectMongoDB();
      const student = await Student.find();

      return NextResponse.json(student);
    } catch (error) {
      console.error("Error fetching registered students:", error);
      return NextResponse.json({ message: "Internal Server Error" });
    }
  }
}
