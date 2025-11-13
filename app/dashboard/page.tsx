import Link from 'next/link'

export default function DashboardPage() {
  // Mock user data
  const user = {
    displayName: 'John Doe',
    username: 'johndoe',
    role: 'MEMBER',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.displayName}!</h1>
        <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Stats */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Your Blog</h3>
          <p className="text-3xl font-bold text-blue-600">5</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Published posts</p>
          <Link href="/blog/new" className="text-sm text-blue-600 hover:text-blue-500 mt-2 block">
            Write new post →
          </Link>
        </div>

        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
          <p className="text-3xl font-bold text-purple-600">8</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Projects showcased</p>
          <Link href={`/portfolio/${user.username}`} className="text-sm text-blue-600 hover:text-blue-500 mt-2 block">
            View portfolio →
          </Link>
        </div>

        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Activity</h3>
          <p className="text-3xl font-bold text-green-600">23</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Messages this week</p>
          <Link href="/chat" className="text-sm text-blue-600 hover:text-blue-500 mt-2 block">
            Go to chat →
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
            <div className="text-2xl">📝</div>
            <div>
              <p className="font-medium">You published a blog post</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "My Journey in Non-Profit Work" - 2 days ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
            <div className="text-2xl">🎨</div>
            <div>
              <p className="font-medium">You added a project to your portfolio</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Community Garden Initiative" - 5 days ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-2xl">💬</div>
            <div>
              <p className="font-medium">You joined #projects channel</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">1 week ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/blog/new"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
          >
            <div className="text-3xl mb-2">📝</div>
            <div className="font-medium">Write Post</div>
          </Link>
          <Link
            href={`/portfolio/${user.username}`}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
          >
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-medium">Edit Portfolio</div>
          </Link>
          <Link
            href="/media"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
          >
            <div className="text-3xl mb-2">📸</div>
            <div className="font-medium">Upload Media</div>
          </Link>
          <Link
            href="/chat"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-center"
          >
            <div className="text-3xl mb-2">💬</div>
            <div className="font-medium">Start Chat</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
