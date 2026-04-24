export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="h-5 w-32 bg-zinc-800 rounded animate-pulse" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 aspect-[4/3] bg-zinc-800 animate-pulse shrink-0" />

            <div className="flex flex-col p-6 sm:p-8 lg:p-10 flex-1 gap-4">
              <div className="h-6 w-20 bg-zinc-800 rounded-full animate-pulse" />
              <div className="h-8 w-3/4 bg-zinc-800 rounded animate-pulse" />
              <div className="h-0.5 w-10 bg-zinc-800 rounded animate-pulse" />
              <div className="space-y-3 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-zinc-800 last:border-0">
                    <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-zinc-800 rounded animate-pulse" />
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
