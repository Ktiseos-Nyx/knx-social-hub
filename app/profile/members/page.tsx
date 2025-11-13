import Link from 'next/link'

export default function MemberDirectoryPage() {
  // Mock member data
  const members = [
    {
      username: 'johndoe',
      displayName: 'John Doe',
      bio: 'Community organizer passionate about making a difference',
      avatar: null,
      location: 'New York, NY',
      skills: ['Event Planning', 'Fundraising', 'Public Speaking'],
      memberSince: '2023-06-15',
      volunteeredHours: 45,
    },
    {
      username: 'janesmit',
      displayName: 'Jane Smith',
      bio: 'Artist and educator dedicated to community arts programs',
      avatar: null,
      location: 'Los Angeles, CA',
      skills: ['Art', 'Education', 'Workshop Facilitation'],
      memberSince: '2023-08-20',
      volunteeredHours: 32,
    },
    {
      username: 'mikejones',
      displayName: 'Mike Jones',
      bio: 'Tech professional volunteering skills for social good',
      avatar: null,
      location: 'San Francisco, CA',
      skills: ['Web Development', 'Data Analysis', 'Project Management'],
      memberSince: '2023-09-10',
      volunteeredHours: 28,
    },
    {
      username: 'sarahwilson',
      displayName: 'Sarah Wilson',
      bio: 'Environmental advocate and community garden coordinator',
      avatar: null,
      location: 'Seattle, WA',
      skills: ['Environmental Science', 'Community Organizing', 'Gardening'],
      memberSince: '2023-05-03',
      volunteeredHours: 67,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Member Directory</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Connect with our community members and discover their skills
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search members by name, skills, or location..."
            className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Filter by:</span>
          {['All', 'Event Planning', 'Technology', 'Education', 'Art', 'Environment'].map(
            (filter) => (
              <button
                key={filter}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Link
            key={member.username}
            href={`/profile/${member.username}`}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Profile Header */}
            <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-600"></div>

            <div className="p-6 -mt-12">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800 flex items-center justify-center text-3xl font-bold text-blue-600 mb-4">
                {member.displayName.charAt(0)}
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold mb-1">{member.displayName}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                @{member.username}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {member.bio}
              </p>

              {/* Location */}
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span className="mr-2">📍</span>
                {member.location}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between text-sm">
                <div>
                  <div className="font-semibold">{member.volunteeredHours}h</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">
                    Volunteered
                  </div>
                </div>
                <div>
                  <div className="font-semibold">
                    {new Date(member.memberSince).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">
                    Member Since
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
          Load More Members
        </button>
      </div>
    </div>
  )
}
