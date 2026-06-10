import { CategoryPage, categoryMetadata } from "@/components/category-page";

export const metadata = categoryMetadata("apps-built-with-claude-code");

export default function Page() {
  return <CategoryPage slug="apps-built-with-claude-code" />;
}
