import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/seo-page";
import { getSeoPage, seoPages, siteUrl } from "@/lib/content";

export function generateStaticParams() {
  const explicitRoutes = new Set(["apps-built-with-lovable", "apps-built-with-replit", "apps-built-with-claude-code"]);
  return seoPages.filter((page) => !explicitRoutes.has(page.slug)).map((page) => ({ seoSlug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ seoSlug: string }> }) {
  const { seoSlug } = await params;
  const page = getSeoPage(seoSlug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "article",
      siteName: "Vibe Rater",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Vibe Rater - We Rate The Apps People Built With Vibes"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function Page({ params }: { params: Promise<{ seoSlug: string }> }) {
  const { seoSlug } = await params;
  const page = getSeoPage(seoSlug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
