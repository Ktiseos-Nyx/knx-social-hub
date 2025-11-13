'use client'

import { useState } from 'react'

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'audio' | 'images'>('all')

  // Mock media data
  const mediaItems = [
    {
      id: '1',
      type: 'video',
      title: 'Community Event Highlights 2024',
      thumbnail: '/placeholder-video.jpg',
      duration: '5:32',
      uploadedBy: 'Admin Team',
      date: '2024-01-15',
    },
    {
      id: '2',
      type: 'audio',
      title: 'Podcast: Making a Difference',
      thumbnail: '/placeholder-audio.jpg',
      duration: '45:20',
      uploadedBy: 'John Doe',
      date: '2024-01-12',
    },
    {
      id: '3',
      type: 'video',
      title: 'Volunteer Stories',
      thumbnail: '/placeholder-video.jpg',
      duration: '8:15',
      uploadedBy: 'Jane Smith',
      date: '2024-01-10',
    },
  ]

  const filteredMedia =
    activeTab === 'all'
      ? mediaItems
      : mediaItems.filter((item) => item.type === activeTab)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Media Gallery</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Explore videos, music, and media from our community
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Upload Media
        </button>
      </div>

      {/* Media Type Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-300 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 ${
            activeTab === 'all'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          All Media
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`px-4 py-2 ${
            activeTab === 'video'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab('audio')}
          className={`px-4 py-2 ${
            activeTab === 'audio'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Audio
        </button>
        <button
          onClick={() => setActiveTab('images')}
          className={`px-4 py-2 ${
            activeTab === 'images'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Images
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative bg-gray-200 dark:bg-gray-800 h-48 flex items-center justify-center">
              {item.type === 'video' && (
                <>
                  <div className="text-6xl">🎥</div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </>
              )}
              {item.type === 'audio' && (
                <>
                  <div className="text-6xl">🎵</div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </>
              )}
            </div>

            {/* Media Info */}
            <div className="p-4">
              <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>{item.uploadedBy}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Playlists / Collections */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎬</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Event Highlights</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Videos from our community events and gatherings
                </p>
                <span className="text-sm text-blue-600">12 videos</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎙️</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Podcast Series</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Conversations with community leaders and members
                </p>
                <span className="text-sm text-blue-600">8 episodes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
