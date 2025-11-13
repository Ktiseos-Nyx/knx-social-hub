import { NextRequest, NextResponse } from 'next/server'
import { EventService } from '@/lib/events/eventService'

/**
 * GET /api/events
 * Get events (upcoming, past, or by month)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') // 'upcoming', 'past', or 'month'
    const year = searchParams.get('year')
    const month = searchParams.get('month')
    const limit = parseInt(searchParams.get('limit') || '20')

    let events

    if (type === 'month' && year && month) {
      // Get events for specific month
      events = await EventService.getEventsByMonth(parseInt(year), parseInt(month))
    } else if (type === 'past') {
      // Get past events
      events = await EventService.getPastEvents(limit)
    } else {
      // Default: upcoming events
      events = await EventService.getUpcomingEvents(limit)
    }

    return NextResponse.json({
      success: true,
      data: events,
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/events
 * Create a new event
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      startDate,
      endDate,
      location,
      isVirtual,
      virtualLink,
      capacity,
      tags,
    } = body

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    // Validate input
    if (!title || !description || !startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: 'Title, description, start date, and end date are required' },
        { status: 400 }
      )
    }

    const event = await EventService.createEvent(
      userId,
      title,
      description,
      new Date(startDate),
      new Date(endDate),
      location,
      isVirtual || false,
      virtualLink,
      capacity ? parseInt(capacity) : undefined,
      tags || []
    )

    return NextResponse.json({
      success: true,
      data: event,
    })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create event' },
      { status: 500 }
    )
  }
}
