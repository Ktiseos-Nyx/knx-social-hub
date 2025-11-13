import Link from 'next/link'

export default function UserProfilePage({ params }: { params: { username: string } }) {
  // Mock profile data
  const profile = {
    username: params.username,
    displayName: 'John Doe',
    bio: 'Community organizer passionate about making a difference',
    longBio: 'I have been involved in community organizing for over 5 years, focusing on environmental initiatives and social justice programs. My goal is to create lasting positive change in our community through collaborative action and education.',
    avatar: null,
    coverImage: null,
    location: 'New York, NY',
    timezone: 'EST',
    website: 'https://johndoe.com',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    memberSince: '2023-06-15',
    volunteeredHours: 45,
    skills: ['Event Planning', 'Fundraising', 'Public Speaking', 'Community Outreach'],
    interests: ['Environment', 'Education', 'Social Justice', 'Arts'],
    languages: ['English', 'Spanish'],
    badges: [
      { name: 'Early Supporter', icon: '🌟', description: 'Joined in the first month' },
      { name: 'Volunteer Champion', icon: '🏆', description: '50+ hours volunteered' },
    ],
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
    stats: {
      followersCount: 142,
      followingCount: 89,
      postsCount: 23,
      eventsAttended: 12,
    },
    showEmail: true,
    showPhone: false,
    showLocation: true,
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>

        {/* Avatar and Basic Info */}
        <div className="absolute bottom-0 left-8 translate-y-1/2 flex items-end gap-6">
          <div className="w-32 h-32 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-900 flex items-center justify-center text-5xl font-bold text-blue-600">
            {profile.displayName.charAt(0)}
          </div>
        </div>

        {/* Edit Button (show if own profile) */}
        <Link
          href="/profile/edit"
          className="absolute top-4 right-4 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Edit Profile
        </Link>
      </div>

      {/* Profile Content */}
      <div className="mt-20">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">{profile.displayName}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-3">@{profile.username}</p>

            {/* Stats */}
            <div className="flex gap-6 text-sm">
              <div>
                <span className="font-semibold">{profile.stats.followersCount}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">Followers</span>
              </div>
              <div>
                <span className="font-semibold">{profile.stats.followingCount}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">Following</span>
              </div>
              <div>
                <span className="font-semibold">{profile.stats.postsCount}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">Posts</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Follow
            </button>
            <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
              Message
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{profile.bio}</p>
              <p className="text-gray-600 dark:text-gray-400">{profile.longBio}</p>
            </div>

            {/* Skills */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="text-2xl">📝</div>
                  <div>
                    <p className="font-medium">Published a blog post</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      "Building Stronger Communities Together" - 3 days ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📅</div>
                  <div>
                    <p className="font-medium">Attended an event</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      "Community Clean-Up Day" - 1 week ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm">
                {profile.showLocation && (
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{profile.location}</span>
                  </div>
                )}
                {profile.showEmail && (
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
                      {profile.email}
                    </a>
                  </div>
                )}
                {profile.website && (
                  <div className="flex items-center gap-2">
                    <span>🌐</span>
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Badges */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Badges</h3>
              <div className="space-y-3">
                {profile.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded"
                  >
                    <div className="text-2xl">{badge.icon}</div>
                    <div>
                      <div className="font-medium text-sm">{badge.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {badge.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Member Stats */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Member Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Member Since</span>
                  <span className="font-medium">
                    {new Date(profile.memberSince).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Hours Volunteered</span>
                  <span className="font-medium">{profile.volunteeredHours}h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Events Attended</span>
                  <span className="font-medium">{profile.stats.eventsAttended}</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
