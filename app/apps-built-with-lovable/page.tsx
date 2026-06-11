import { SeoLandingPage } from "@/components/seo-page";
import { getSeoPage, siteUrl } from "@/lib/content";

const page = getSeoPage("apps-built-with-lovable")!;

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${siteUrl}/${page.slug}` },
  openGraph: { title: page.title, description: page.description, url: `${siteUrl}/${page.slug}`, type: "article" }
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
