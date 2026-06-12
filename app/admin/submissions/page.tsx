import { Band, SectionHeader } from "@/components/ui";
import { readSubmissions } from "@/lib/submissions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Submissions Admin",
  description: "Hidden Vibe Rater submissions dashboard."
};

const statuses = ["New", "Reviewing", "Published", "Rejected"];

export default function AdminSubmissionsPage({ searchParams }: { searchParams: Promise<{ type?: string; stage?: string; category?: string }> }) {
  if (process.env.ADMIN_DASHBOARD_ENABLED !== "true") {
    return (
      <main>
        <Band>
          <div className="rounded-lg border border-line bg-white/[0.045] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-paper/[0.46]">Admin</p>
            <h1 className="mt-3 font-display text-4xl font-black">Dashboard disabled</h1>
            <p className="mt-4 text-sm leading-6 text-paper/[0.68]">Set ADMIN_DASHBOARD_ENABLED=true to view local submissions.</p>
          </div>
        </Band>
      </main>
    );
  }

  return <AdminSubmissionsContent searchParams={searchParams} />;
}

async function AdminSubmissionsContent({ searchParams }: { searchParams: Promise<{ type?: string; stage?: string; category?: string }> }) {
  const filters = await searchParams;
  const submissions = readSubmissions().filter((submission) => {
    if (filters.type && !submission.requestTypes.includes(filters.type)) return false;
    if (filters.stage && submission.stage !== filters.stage) return false;
    if (filters.category && !submission.category.toLowerCase().includes(filters.category.toLowerCase())) return false;
    return true;
  });

  return (
    <main>
      <Band>
        <SectionHeader kicker="Admin" title="Founder submissions" body="Local MVP dashboard for review queue triage. Add auth before exposing this publicly." />
        <form className="mb-6 grid gap-3 rounded-lg border border-line bg-white/[0.045] p-4 md:grid-cols-4">
          <input name="type" placeholder="Filter by type" className="rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper" />
          <input name="stage" placeholder="Filter by stage" className="rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper" />
          <input name="category" placeholder="Filter by category" className="rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper" />
          <button className="rounded-md bg-acid px-4 py-2 text-sm font-bold text-ink">Filter</button>
        </form>

        {submissions.length ? (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <article key={submission.id} className="rounded-lg border border-line bg-white/[0.045] p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-acid">{submission.stage} · {submission.category || "Uncategorized"}</p>
                    <h2 className="mt-2 font-display text-3xl font-bold">{submission.startupName}</h2>
                    <p className="mt-2 text-sm text-paper/[0.64]">{submission.pitch}</p>
                    <p className="mt-2 text-xs text-paper/[0.46]">{submission.founderName} · {submission.founderEmail}</p>
                  </div>
                  <a href={submission.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-acid">Open site</a>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-paper/[0.68] md:grid-cols-3">
                  <Block label="Problem" value={submission.problem} />
                  <Block label="Audience" value={submission.audience} />
                  <Block label="Different" value={submission.differentiation} />
                  <Block label="Traction" value={submission.traction} />
                  <Block label="Challenge" value={submission.biggestChallenge} />
                  <Block label="Request" value={submission.requestTypes.join(", ")} />
                </div>
                <form action="/api/admin/submissions" method="post" className="mt-4 grid gap-3 md:grid-cols-[180px_1fr_140px]">
                  <input type="hidden" name="id" value={submission.id} />
                  <select name="status" defaultValue={submission.status} className="rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper">
                    {statuses.map((status) => <option key={status}>{status}</option>)}
                  </select>
                  <input name="internalNotes" defaultValue={submission.internalNotes} placeholder="Internal notes" className="rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper" />
                  <button className="rounded-md bg-paper px-4 py-2 text-sm font-bold text-ink">Save</button>
                </form>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-line bg-white/[0.045] p-6">
            <h2 className="font-display text-3xl font-bold">No submissions yet</h2>
            <p className="mt-3 text-sm leading-6 text-paper/[0.68]">When founders submit through the form, they will appear here.</p>
          </div>
        )}
      </Band>
    </main>
  );
}

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-black/[0.18] p-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.42]">{label}</p>
      <p className="mt-2 leading-6">{value || "Not provided"}</p>
    </div>
  );
}
