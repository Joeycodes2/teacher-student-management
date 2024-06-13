import { connectMongoDB } from "@/lib/mongodb";
import Teacher from "@/models/teacher";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    try {
      await connectMongoDB();
      const teacher = await Teacher.find();
      // console.log("A spread of teachers: ", teacher);

      return NextResponse.json(teacher);
    } catch (error) {
      console.error("Error fetching registered teachers:", error);
      return NextResponse.json({ message: "Internal Server Error" });
    }
  }
}
