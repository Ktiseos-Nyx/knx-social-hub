import Link from 'next/link'

export default function BlogPage() {
  // Mock blog posts
  const orgPosts = [
    {
      id: '1',
      title: 'Welcome to KNX Social Hub',
      slug: 'welcome-to-knx-social-hub',
      excerpt: 'We are excited to announce the launch of our new social hub platform...',
      author: 'Admin Team',
      date: '2024-01-15',
      isOrgBlog: true,
    },
    {
      id: '2',
      title: 'Community Guidelines and Best Practices',
      slug: 'community-guidelines',
      excerpt: 'Learn about our community values and how to make the most of our platform...',
      author: 'Admin Team',
      date: '2024-01-10',
      isOrgBlog: true,
    },
  ]

  const memberPosts = [
    {
      id: '3',
      title: 'My Journey in Non-Profit Work',
      slug: 'my-journey-in-nonprofit',
      excerpt: 'Sharing my experiences and insights from years of community service...',
      author: 'John Doe',
      date: '2024-01-14',
      isOrgBlog: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div className="flex gap-4">
          <Link
            href="/blog/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Write a Post
          </Link>
        </div>
      </div>

      {/* Organization Blog Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Organization News</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Official updates and announcements
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orgPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">
                  Official
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Member Blogs Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Member Stories</h2>
          <Link
            href="/blog/members"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memberPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
