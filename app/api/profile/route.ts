import { NextRequest, NextResponse } from 'next/server'
import { ProfileService } from '@/lib/profile/profileService'

/**
 * GET /api/profile
 * Get user profile by username or userId
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const username = searchParams.get('username')
    const userId = searchParams.get('userId')

    if (!username && !userId) {
      // Get all public profiles
      const profiles = await ProfileService.getPublicProfiles()
      return NextResponse.json({
        success: true,
        data: profiles,
      })
    }

    let profile
    if (username) {
      profile = await ProfileService.getProfileByUsername(username)
    } else if (userId) {
      profile = await ProfileService.getProfileByUserId(userId)
    }

    if (!profile) {
      return NextResponse.json(
        { success: false, error: 'Profile not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: profile,
    })
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch profile' },
      { status: 500 }
    )
  }
}

/**
 * PUT /api/profile
 * Update user profile
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    const profile = await ProfileService.updateProfile(userId, body)

    return NextResponse.json({
      success: true,
      data: profile,
    })
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update profile' },
      { status: 500 }
    )
  }
}
