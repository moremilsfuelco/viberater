import type { MetadataRoute } from "next";
import { articles, founders, reviews, seoPages, siteUrl } from "@/lib/content";

const staticRoutes = [
  "",
  "about",
  "articles",
  "best-ai-fitness-apps",
  "best-ai-productivity-apps",
  "best-vibe-coded-apps",
  "founders",
  "newsletter",
  "rankings",
  "reviews",
  "submit",
  "vibe-score"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes.map((route) => `${siteUrl}/${route}`.replace(/\/$/, "")),
    ...seoPages.map((page) => `${siteUrl}/${page.slug}`),
    ...articles.map((article) => `${siteUrl}/articles/${article.slug}`),
    ...founders.map((founder) => `${siteUrl}/founders/${founder.slug}`),
    ...reviews.map((review) => `${siteUrl}/reviews/${review.slug}`)
  ];

  return Array.from(new Set(routes)).map((url) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: url === siteUrl ? 1 : 0.7
  }));
}
