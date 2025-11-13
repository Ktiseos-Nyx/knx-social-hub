'use client'

import { useState } from 'react'

export default function ChatPage() {
  const [selectedChannel, setSelectedChannel] = useState('general')
  const [message, setMessage] = useState('')

  // Mock data for demonstration
  const channels = [
    { id: 'general', name: '# general', type: 'public' },
    { id: 'announcements', name: '# announcements', type: 'public' },
    { id: 'random', name: '# random', type: 'public' },
    { id: 'projects', name: '# projects', type: 'private' },
  ]

  const mockMessages = [
    { id: 1, user: 'Admin', content: 'Welcome to the chat!', timestamp: '10:00 AM' },
    { id: 2, user: 'Member1', content: 'Hello everyone!', timestamp: '10:05 AM' },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement message sending
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <div className="flex h-screen">
      {/* Channel Sidebar */}
      <div className="w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700">
        <div className="p-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-xl font-bold">KNX Social Hub</h2>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            CHANNELS
          </h3>
          <div className="space-y-1">
            {channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                className={`w-full text-left px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  selectedChannel === channel.id
                    ? 'bg-gray-200 dark:bg-gray-800'
                    : ''
                }`}
              >
                {channel.name}
              </button>
            ))}
          </div>

          <button className="mt-4 text-sm text-blue-600 hover:text-blue-500">
            + Create Channel
          </button>
        </div>

        <div className="p-4 border-t border-gray-300 dark:border-gray-700 mt-auto">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            DIRECT MESSAGES
          </h3>
          <button className="text-sm text-blue-600 hover:text-blue-500">
            + New DM
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-300 dark:border-gray-700 px-4 flex items-center">
          <h2 className="text-xl font-semibold"># {selectedChannel}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                {msg.user[0]}
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="font-semibold">{msg.user}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {msg.timestamp}
                  </span>
                </div>
                <p className="text-gray-800 dark:text-gray-200">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-300 dark:border-gray-700 p-4">
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Message #${selectedChannel}`}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
