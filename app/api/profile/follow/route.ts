import { NextRequest, NextResponse } from 'next/server'
import { ProfileService } from '@/lib/profile/profileService'

/**
 * POST /api/profile/follow
 * Follow a user
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { followingId } = body

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    if (!followingId) {
      return NextResponse.json(
        { success: false, error: 'followingId is required' },
        { status: 400 }
      )
    }

    const follow = await ProfileService.followUser(userId, followingId)

    return NextResponse.json({
      success: true,
      data: follow,
    })
  } catch (error) {
    console.error('Error following user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to follow user' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/profile/follow
 * Unfollow a user
 */
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const followingId = searchParams.get('followingId')

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    if (!followingId) {
      return NextResponse.json(
        { success: false, error: 'followingId is required' },
        { status: 400 }
      )
    }

    await ProfileService.unfollowUser(userId, followingId)

    return NextResponse.json({
      success: true,
      message: 'Successfully unfollowed user',
    })
  } catch (error) {
    console.error('Error unfollowing user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to unfollow user' },
      { status: 500 }
    )
  }
}
