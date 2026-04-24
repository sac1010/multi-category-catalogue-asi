export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 aspect-[4/3] bg-gray-200 animate-pulse shrink-0" />

            <div className="flex flex-col p-6 sm:p-8 lg:p-10 flex-1 gap-4">
              <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-0.5 w-10 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-3 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
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
