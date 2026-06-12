import { EditorialIndexPage } from "@/components/editorial";
import { getEditorialIndex } from "@/lib/content";

const index = getEditorialIndex("distribution")!;

export const metadata = {
  title: index.title,
  description: index.description
};

export default function Page() {
  return <EditorialIndexPage slug="distribution" />;
}
