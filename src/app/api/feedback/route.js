import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function withCORS(response) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function OPTIONS() {
  // Preflight CORS support
  return withCORS(new NextResponse(null, { status: 204 }));
}

export async function POST(request) {
  const body = await request.json();
  const { name, email, message, rating } = body; // rating included
  if (!message) {
    return withCORS(
      NextResponse.json({ error: "Message is required" }, { status: 400 })
    );
  }
  try {
    const feedback = await prisma.feedback.create({
      data: { name, email, message, rating }, // store rating
    });
    return withCORS(NextResponse.json(feedback, { status: 201 }));
  } catch {
    return withCORS(
      NextResponse.json({ error: "Failed to save feedback" }, { status: 500 })
    );
  }
}

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
    });
    return withCORS(NextResponse.json(feedbacks, { status: 200 }));
  } catch {
    return withCORS(
      NextResponse.json({ error: "Failed to fetch feedbacks" }, { status: 500 })
    );
  }
}
