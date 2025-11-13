import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">KNX Social Hub</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A Network for Non-Profit Organization Members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Events Module */}
          <Link href="/events" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">📅 Events</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Community events, volunteer opportunities, and calendar
            </p>
          </Link>

          {/* Member Profiles */}
          <Link href="/profile/members" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">👥 Members</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Browse member directory and connect with community
            </p>
          </Link>

          {/* Chat Module */}
          <Link href="/chat" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">💬 Chat</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discord-like chat system with channels and direct messaging
            </p>
          </Link>

          {/* Blog Module */}
          <Link href="/blog" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">📝 Blog</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Organization blog and member personal blogs
            </p>
          </Link>

          {/* Portfolio Module */}
          <Link href="/portfolio" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">🎨 Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Showcase member work and projects
            </p>
          </Link>

          {/* Media Gallery */}
          <Link href="/media" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">🎵 Media</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Music, video, and media gallery
            </p>
          </Link>

          {/* Dashboard */}
          <Link href="/dashboard" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">📊 Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Member dashboard and personal space
            </p>
          </Link>

          {/* Admin */}
          <Link href="/admin" className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">⚙️ Admin</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Administrative controls and settings
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
