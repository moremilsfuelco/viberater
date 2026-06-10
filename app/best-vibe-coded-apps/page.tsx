import { CategoryPage, categoryMetadata } from "@/components/category-page";

export const metadata = categoryMetadata("best-vibe-coded-apps");

export default function Page() {
  return <CategoryPage slug="best-vibe-coded-apps" />;
}
