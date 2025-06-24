import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black text-white shadow">
        <h1 className="text-2xl font-bold">🎭 Artistly</h1>
        <nav className="space-x-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/onboard">Onboard</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover & Book Top Performing Artists</h2>
        <p className="text-xl mb-6">From DJs to Dancers – Find the perfect talent for your event</p>
        <Link href="/artists">
          <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition">
            Explore Artists
          </button>
        </Link>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">Browse by Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🎤', label: 'Singers' },
            { icon: '💃', label: 'Dancers' },
            { icon: '🎧', label: 'DJs' },
            { icon: '🎙️', label: 'Speakers' },
          ].map((cat) => (
            <div
              key={cat.label}
              className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h4 className="text-xl font-bold">{cat.label}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
