import { NextRequest, NextResponse } from 'next/server'
import { EventService } from '@/lib/events/eventService'

/**
 * POST /api/events/[eventId]/rsvp
 * RSVP to an event
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    const body = await request.json()
    const { status, response, volunteerRole } = body

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    // Validate input
    if (!status || !['going', 'interested', 'not_going'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Valid status is required (going, interested, not_going)' },
        { status: 400 }
      )
    }

    const rsvp = await EventService.rsvpToEvent(
      params.eventId,
      userId,
      status,
      response,
      volunteerRole
    )

    return NextResponse.json({
      success: true,
      data: rsvp,
    })
  } catch (error) {
    console.error('Error creating RSVP:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create RSVP' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/events/[eventId]/rsvp
 * Get RSVPs for an event
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    const rsvps = await EventService.getEventRSVPs(params.eventId)

    return NextResponse.json({
      success: true,
      data: rsvps,
    })
  } catch (error) {
    console.error('Error fetching RSVPs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch RSVPs' },
      { status: 500 }
    )
  }
}
