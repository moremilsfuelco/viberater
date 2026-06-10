import Link from "next/link";
import { Band, SectionHeader } from "@/components/ui";
import { founders } from "@/lib/content";

export const metadata = {
  title: "AI Founder Stories",
  description: "Founder profiles from the people building vibe-coded apps and indie AI startups."
};

export default function FoundersPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Directory" title="AI Founder Stories" body="Profiles focused on why founders built the thing, what went wrong, what they learned, and what they are trying next." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <Link href={`/founders/${founder.slug}`} key={founder.slug} className="rounded-lg border border-line bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-paper/[0.28]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{founder.app}</p>
              <h2 className="mt-3 font-display text-2xl font-bold">{founder.name}</h2>
              <p className="mt-4 text-sm leading-6 text-paper/[0.68]">{founder.background}</p>
              <p className="mt-5 text-sm font-bold text-acid">{founder.favoriteTool}</p>
            </Link>
          ))}
        </div>
      </Band>
    </main>
  );
}
