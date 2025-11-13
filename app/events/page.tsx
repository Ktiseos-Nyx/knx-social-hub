import Link from 'next/link'

export default function EventsPage() {
  // Mock events data
  const upcomingEvents = [
    {
      id: '1',
      title: 'Community Clean-Up Day',
      slug: 'community-cleanup-day',
      description: 'Join us for a day of cleaning up local parks and streets',
      startDate: '2024-02-15T09:00:00',
      endDate: '2024-02-15T15:00:00',
      location: 'Central Park',
      isVirtual: false,
      capacity: 50,
      currentAttendees: 23,
      organizer: 'Admin Team',
      tags: ['volunteer', 'environment'],
    },
    {
      id: '2',
      title: 'Virtual Fundraising Gala',
      slug: 'virtual-fundraising-gala',
      description: 'Annual fundraising event to support our programs',
      startDate: '2024-02-20T18:00:00',
      endDate: '2024-02-20T21:00:00',
      location: null,
      isVirtual: true,
      capacity: 200,
      currentAttendees: 87,
      organizer: 'Events Committee',
      tags: ['fundraising', 'virtual'],
    },
    {
      id: '3',
      title: 'Skills Workshop: Web Development',
      slug: 'skills-workshop-web-development',
      description: 'Learn the basics of web development with our expert volunteers',
      startDate: '2024-02-25T14:00:00',
      endDate: '2024-02-25T17:00:00',
      location: 'Community Center',
      isVirtual: false,
      capacity: 30,
      currentAttendees: 18,
      organizer: 'John Doe',
      tags: ['education', 'technology'],
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Events</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Discover and join community events, volunteer opportunities, and workshops
        </p>
        <div className="flex gap-4">
          <Link
            href="/events/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Event
          </Link>
          <Link
            href="/events/calendar"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            📅 Calendar View
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-300 dark:border-gray-700">
        <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          Upcoming
        </button>
        <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          My Events
        </button>
        <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          Past Events
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Event Image/Banner */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">📅</div>
                <div className="font-semibold">
                  {new Date(event.startDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {event.isVirtual ? (
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                    Virtual
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                    In-Person
                  </span>
                )}
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {event.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-2">🕐</span>
                  {formatDate(event.startDate)}
                </div>
                {event.location && (
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </div>
                )}
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-2">👥</span>
                  {event.currentAttendees}/{event.capacity || '∞'} attending
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Organized by {event.organizer}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Filters */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {['All Events', 'Volunteer', 'Fundraising', 'Education', 'Social', 'Virtual', 'Workshops'].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
