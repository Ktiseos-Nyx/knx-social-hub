import { NextRequest, NextResponse } from 'next/server'
import { ChatService } from '@/lib/chat/chatService'

/**
 * GET /api/chat/channels
 * Get all channels for the current user
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    const channels = await ChatService.getUserChannels(userId)

    return NextResponse.json({
      success: true,
      data: channels,
    })
  } catch (error) {
    console.error('Error fetching channels:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch channels' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/chat/channels
 * Create a new channel
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, type } = body

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    // Validate input
    if (!name || !type) {
      return NextResponse.json(
        { success: false, error: 'Name and type are required' },
        { status: 400 }
      )
    }

    const channel = await ChatService.createChannel(name, description, type, userId)

    return NextResponse.json({
      success: true,
      data: channel,
    })
  } catch (error) {
    console.error('Error creating channel:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create channel' },
      { status: 500 }
    )
  }
}
