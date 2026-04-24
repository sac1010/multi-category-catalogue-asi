"use client";

import { useState } from "react";
import { CatalogueItem, CATEGORY_COLORS, CATEGORY_ICONS } from "@/data/catalogue";
import CategorySection from "./CategorySection";

interface Props {
  grouped: Record<string, CatalogueItem[]>;
  categoryOrder: string[];
  totalCount: number;
}

export default function CatalogueView({ grouped, categoryOrder, totalCount }: Props) {
  const [selected, setSelected] = useState("All");

  const visibleCategories =
    selected === "All"
      ? categoryOrder.filter((cat) => grouped[cat])
      : [selected];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="shrink-0">
            <h1 className="text-lg font-bold text-gray-900 tracking-tight">Product Catalogue</h1>
            <p className="text-xs text-gray-500 mt-0.5">{totalCount} products</p>
          </div>

          <div className="relative">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            >
              <option value="All">🗂️ All Categories</option>
              {categoryOrder.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_ICONS[cat]} {cat}
                </option>
              ))}
            </select>

            {/* chevron */}
            <svg
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* colour strip under header when a category is selected */}
        {selected !== "All" && (
          <div className={`h-0.5 ${CATEGORY_COLORS[selected]?.dot ?? "bg-gray-300"}`} />
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {visibleCategories.map((category) => (
          <CategorySection
            key={category}
            category={category}
            items={grouped[category]}
          />
        ))}
      </main>
    </div>
  );
}
