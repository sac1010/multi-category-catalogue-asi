import { CatalogueItem, CATEGORY_COLORS, CATEGORY_ICONS } from "@/data/catalogue";
import ItemCard from "./ItemCard";

interface Props {
  category: string;
  items: CatalogueItem[];
}

export default function CategorySection({ category, items }: Props) {
  const colors = CATEGORY_COLORS[category] ?? CATEGORY_COLORS["Cars"];
  const icon = CATEGORY_ICONS[category] ?? "";

  return (
    <section className={`border-l-4 ${colors.border} pl-5`}>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <h2 className="text-xl font-bold text-white tracking-tight">{category}</h2>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ItemCard key={item.itemname} item={item} />
        ))}
      </div>
    </section>
  );
}
