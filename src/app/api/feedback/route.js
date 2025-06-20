import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();
  const { name, email, message, rating } = body; // rating included
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }
  try {
    const feedback = await prisma.feedback.create({
      data: { name, email, message, rating }, // store rating
    });
    return NextResponse.json(feedback, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(feedbacks, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch feedbacks" },
      { status: 500 }
    );
  }
}
