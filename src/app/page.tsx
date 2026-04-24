import { groupByCategory, CATEGORY_ORDER } from "@/data/catalogue";
import CatalogueView from "@/components/CatalogueView";

export default function Home() {
  const grouped = groupByCategory();
  const totalCount = Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <CatalogueView
      grouped={grouped}
      categoryOrder={CATEGORY_ORDER}
      totalCount={totalCount}
    />
  );
}
