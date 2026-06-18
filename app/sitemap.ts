import type { MetadataRoute } from "next";
import { articles, editorialArticles, editorialIndexes, founders, publishedReviews, seoPages, siteUrl } from "@/lib/content";

const staticRoutes = [
  "",
  "about",
  "articles",
  "ai-built-apps",
  "app-store-lessons",
  "best-ai-fitness-apps",
  "best-ai-productivity-apps",
  "best-vibe-coded-apps",
  "distribution",
  "founder-breakdowns",
  "founders",
  "newsletter",
  "rankings",
  "reviews",
  "startup-roasts",
  "submit",
  "submit/thanks",
  "vibe-score"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const publishedEditorialArticles = editorialArticles.filter((article) => article.status === "published");
  const routes = [
    ...staticRoutes.map((route) => `${siteUrl}/${route}`.replace(/\/$/, "")),
    ...editorialIndexes.map((page) => `${siteUrl}/${page.slug}`),
    ...seoPages.map((page) => `${siteUrl}/${page.slug}`),
    ...articles.map((article) => `${siteUrl}/articles/${article.slug}`),
    ...publishedEditorialArticles.map((article) => `${siteUrl}/articles/${article.slug}`),
    ...founders.map((founder) => `${siteUrl}/founders/${founder.slug}`),
    ...publishedReviews.map((review) => `${siteUrl}/reviews/${review.slug}`)
  ];

  return Array.from(new Set(routes)).map((url) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: url === siteUrl ? 1 : 0.7
  }));
}
