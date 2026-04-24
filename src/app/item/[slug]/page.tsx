import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItemBySlug, CATEGORY_COLORS, CATEGORY_ICONS } from "@/data/catalogue";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const colors = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS["Cars"];
  const icon = CATEGORY_ICONS[item.category] ?? "";

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Catalogue
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-zinc-800 shrink-0">
              <Image
                src={item.image}
                alt={item.itemname}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8 lg:p-10 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}
                >
                  <span aria-hidden="true">{icon}</span>
                  {item.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                {item.itemname}
              </h1>

              <div className={`w-10 h-0.5 ${colors.dot} rounded-full mb-6`} />

              <div className="space-y-0 divide-y divide-zinc-800">
                {item.itemprops.map((prop) => (
                  <div
                    key={prop.label}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                  >
                    <span className="text-sm text-zinc-400 font-medium">{prop.label}</span>
                    <span className="text-sm font-semibold text-white text-right ml-4">
                      {prop.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
