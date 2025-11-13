'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EventsCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Mock events for calendar
  const events = [
    { date: 15, title: 'Community Clean-Up', time: '9:00 AM' },
    { date: 20, title: 'Virtual Fundraising Gala', time: '6:00 PM' },
    { date: 25, title: 'Web Development Workshop', time: '2:00 PM' },
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const hasEvent = (day: number) => {
    return events.some(event => event.date === day)
  }

  const getEventForDay = (day: number) => {
    return events.find(event => event.date === day)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/events"
          className="text-blue-600 hover:text-blue-500 mb-4 inline-block"
        >
          ← Back to Events List
        </Link>
        <h1 className="text-3xl font-bold">Events Calendar</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={previousMonth}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                ←
              </button>
              <h2 className="text-2xl font-semibold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={nextMonth}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                →
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div
                  key={day}
                  className="text-center font-semibold text-sm text-gray-600 dark:text-gray-400 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square" />
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1
                const event = getEventForDay(day)
                const isToday =
                  day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear()

                return (
                  <div
                    key={day}
                    className={`
                      aspect-square border border-gray-200 dark:border-gray-700 rounded p-2
                      hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer
                      ${isToday ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' : ''}
                      ${event ? 'bg-green-50 dark:bg-green-900/20' : ''}
                    `}
                  >
                    <div className="text-sm font-medium">{day}</div>
                    {event && (
                      <div className="text-xs mt-1 text-green-700 dark:text-green-400 truncate">
                        {event.title}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-500 rounded"></div>
                <span>Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-50 dark:bg-green-900/20 rounded"></div>
                <span>Has Event</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="lg:col-span-1">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>

            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded flex flex-col items-center justify-center">
                      <div className="text-xs text-blue-600 dark:text-blue-400">
                        {monthNames[currentDate.getMonth()].slice(0, 3)}
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {event.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/events"
              className="block mt-6 text-center text-blue-600 hover:text-blue-500 text-sm"
            >
              View all events →
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href="/events/new"
                className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
              >
                Create Event
              </Link>
              <button className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 text-center rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                Export Calendar
              </button>
              <button className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 text-center rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                Subscribe (iCal)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
