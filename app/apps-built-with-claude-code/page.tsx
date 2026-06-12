import { SeoLandingPage } from "@/components/seo-page";
import { getSeoPage, siteUrl } from "@/lib/content";

const page = getSeoPage("apps-built-with-claude-code")!;

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${siteUrl}/${page.slug}` },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `${siteUrl}/${page.slug}`,
    type: "article",
    siteName: "Vibe Rater",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vibe Rater - We Rate The Apps People Built With Vibes" }]
  },
  twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/opengraph-image"] }
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
