import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const submission = Object.fromEntries(formData.entries());

  console.log("Vibe Rater submission placeholder", submission);

  return NextResponse.json({
    ok: true,
    message: "Submission received by the local placeholder handler. Wire this to Supabase, email, or a moderation queue before launch."
  });
}
