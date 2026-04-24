import Image from "next/image";
import Link from "next/link";
import { CatalogueItem, CATEGORY_COLORS, slugify } from "@/data/catalogue";

interface Props {
  item: CatalogueItem;
}

export default function ItemCard({ item }: Props) {
  const colors = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS["Cars"];
  const slug = slugify(item.itemname);
  const previewProps = item.itemprops.slice(0, 2);

  return (
    <Link
      href={`/item/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
        <Image
          src={item.image}
          alt={item.itemname}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 truncate">
          {item.itemname}
        </h3>
        {previewProps.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {previewProps.map((prop) => (
              <span
                key={prop.label}
                className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}
              >
                {prop.label}: {prop.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
