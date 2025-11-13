export default function AdminPage() {
  // Mock admin stats
  const stats = {
    totalUsers: 247,
    activeUsers: 89,
    totalPosts: 156,
    totalMessages: 3421,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your organization and community
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
            TOTAL USERS
          </h3>
          <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
            ACTIVE USERS
          </h3>
          <p className="text-3xl font-bold text-green-700 dark:text-green-300">
            {stats.activeUsers}
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
            TOTAL POSTS
          </h3>
          <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
            {stats.totalPosts}
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">
            MESSAGES
          </h3>
          <p className="text-3xl font-bold text-orange-700 dark:text-orange-300">
            {stats.totalMessages}
          </p>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* User Management */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              View All Users
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Manage Roles & Permissions
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Approve New Members
            </button>
          </div>
        </div>

        {/* Content Management */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Content Management</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Moderate Posts & Comments
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Manage Organization Blog
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Media Library Management
            </button>
          </div>
        </div>

        {/* Chat Management */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Chat Management</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Create/Manage Channels
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Moderate Messages
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              View Chat Analytics
            </button>
          </div>
        </div>

        {/* Settings */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              General Settings
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Email Templates
            </button>
            <button className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Backup & Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-800">
            <div>
              <p className="font-medium">New user registered</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">sarah.johnson@email.com</p>
            </div>
            <span className="text-sm text-gray-500">5 min ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-800">
            <div>
              <p className="font-medium">Blog post published</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Community Event Announcement</p>
            </div>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium">New channel created</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">#volunteer-coordination</p>
            </div>
            <span className="text-sm text-gray-500">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
