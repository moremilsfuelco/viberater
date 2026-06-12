import { EditorialIndexPage } from "@/components/editorial";
import { getEditorialIndex } from "@/lib/content";

const index = getEditorialIndex("app-store-lessons")!;

export const metadata = {
  title: index.title,
  description: index.description
};

export default function Page() {
  return <EditorialIndexPage slug="app-store-lessons" />;
}
