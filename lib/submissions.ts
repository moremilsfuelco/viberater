import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

export type SubmissionStatus = "New" | "Reviewing" | "Published" | "Rejected";

export type StartupSubmission = {
  id: string;
  createdAt: string;
  status: SubmissionStatus;
  startupName: string;
  websiteUrl: string;
  founderName: string;
  founderEmail: string;
  category: string;
  stage: string;
  pitch: string;
  problem: string;
  audience: string;
  differentiation: string;
  traction: string;
  biggestChallenge: string;
  requestTypes: string[];
  socialLinks: string;
  logo: string;
  screenshotsDemoUrl: string;
  permissionToPublish: boolean;
  newsletterOptIn: boolean;
  internalNotes: string;
};

const dataDir = path.join(process.cwd(), "data");
const submissionsPath = path.join(dataDir, "submissions.json");

export function readSubmissions(): StartupSubmission[] {
  if (!existsSync(submissionsPath)) {
    return [];
  }

  try {
    return JSON.parse(readFileSync(submissionsPath, "utf8")) as StartupSubmission[];
  } catch {
    return [];
  }
}

export function saveSubmission(input: Omit<StartupSubmission, "id" | "createdAt" | "status" | "internalNotes">) {
  const submissions = readSubmissions();
  const submission: StartupSubmission = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "New",
    internalNotes: ""
  };

  mkdirSync(dataDir, { recursive: true });
  writeFileSync(submissionsPath, JSON.stringify([submission, ...submissions], null, 2));

  return submission;
}

export function updateSubmission(id: string, updates: Pick<StartupSubmission, "status" | "internalNotes">) {
  const submissions = readSubmissions();
  const next = submissions.map((submission) => (
    submission.id === id ? { ...submission, ...updates } : submission
  ));

  mkdirSync(dataDir, { recursive: true });
  writeFileSync(submissionsPath, JSON.stringify(next, null, 2));
}

export async function sendSubmissionConfirmation(submission: StartupSubmission) {
  if (!process.env.RESEND_API_KEY && !process.env.EMAIL_PROVIDER_API_KEY) {
    return { sent: false, reason: "No email provider configured" };
  }

  // Wire a provider here when Vibe Rater adds email infrastructure.
  return { sent: false, reason: `Email provider env exists, but no sender adapter is configured for ${submission.founderEmail}` };
}
