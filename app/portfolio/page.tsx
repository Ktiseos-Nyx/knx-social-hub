import Link from 'next/link'

export default function PortfolioPage() {
  // Mock portfolio data
  const portfolios = [
    {
      id: '1',
      username: 'johndoe',
      displayName: 'John Doe',
      title: 'Design & Development Portfolio',
      description: 'Creative works and projects',
      projectCount: 5,
    },
    {
      id: '2',
      username: 'janesmit',
      displayName: 'Jane Smith',
      title: 'Community Art Projects',
      description: 'Art that makes a difference',
      projectCount: 8,
    },
    {
      id: '3',
      username: 'mikejones',
      displayName: 'Mike Jones',
      title: 'Non-Profit Initiatives',
      description: 'Social impact projects',
      projectCount: 3,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Member Portfolios</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Explore creative works and projects from our community members
        </p>
        <Link
          href="/dashboard"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Manage My Portfolio
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <Link
            key={portfolio.id}
            href={`/portfolio/${portfolio.username}`}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Portfolio Cover */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">
                {portfolio.displayName.charAt(0)}
              </div>
            </div>

            {/* Portfolio Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{portfolio.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                by {portfolio.displayName}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {portfolio.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{portfolio.projectCount} projects</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
