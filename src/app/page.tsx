import { groupByCategory, CATEGORY_ORDER } from "@/data/catalogue";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  const grouped = groupByCategory();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900 tracking-tight">Product Catalogue</h1>
            <p className="text-xs text-gray-500 mt-0.5">Browse by category</p>
          </div>
          <span className="text-xs text-gray-400 font-medium">
            {Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0)} products
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {CATEGORY_ORDER.filter((cat) => grouped[cat]).map((category) => (
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
