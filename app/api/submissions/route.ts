import { NextResponse } from "next/server";
import { saveSubmission, sendSubmissionConfirmation } from "@/lib/submissions";

function getString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const requestTypes = formData.getAll("requestTypes").map((value) => String(value));

  const submission = saveSubmission({
    startupName: getString(formData, "startupName"),
    websiteUrl: getString(formData, "websiteUrl"),
    founderName: getString(formData, "founderName"),
    founderEmail: getString(formData, "founderEmail"),
    category: getString(formData, "category"),
    stage: getString(formData, "stage"),
    pitch: getString(formData, "pitch"),
    problem: getString(formData, "problem"),
    audience: getString(formData, "audience"),
    differentiation: getString(formData, "differentiation"),
    traction: getString(formData, "traction"),
    biggestChallenge: getString(formData, "biggestChallenge"),
    requestTypes,
    socialLinks: getString(formData, "socialLinks"),
    logo: getString(formData, "logo"),
    screenshotsDemoUrl: getString(formData, "screenshotsDemoUrl"),
    permissionToPublish: formData.get("permissionToPublish") === "on",
    newsletterOptIn: formData.get("newsletterOptIn") === "on"
  });

  await sendSubmissionConfirmation(submission);

  return NextResponse.redirect(new URL(`/submit/thanks?name=${encodeURIComponent(submission.startupName)}`, request.url), 303);
}
