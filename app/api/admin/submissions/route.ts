import { NextResponse } from "next/server";
import { updateSubmission } from "@/lib/submissions";

export async function POST(request: Request) {
  if (process.env.ADMIN_DASHBOARD_ENABLED !== "true") {
    return NextResponse.json({ error: "Admin dashboard disabled" }, { status: 404 });
  }

  const formData = await request.formData();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "New");
  const internalNotes = String(formData.get("internalNotes") ?? "");

  if (!["New", "Reviewing", "Published", "Rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  updateSubmission(id, { status: status as "New" | "Reviewing" | "Published" | "Rejected", internalNotes });

  return NextResponse.redirect(new URL("/admin/submissions", request.url), 303);
}
