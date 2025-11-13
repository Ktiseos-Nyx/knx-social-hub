import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth/authService'

/**
 * POST /api/auth/register
 * User registration endpoint
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, username, password, displayName } = body

    // Validate input
    if (!email || !username || !password || !displayName) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create user
    const user = await AuthService.register({
      email,
      username,
      password,
      displayName,
    })

    return NextResponse.json({
      success: true,
      data: user,
      message: 'Registration successful',
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { success: false, error: 'Registration failed' },
      { status: 500 }
    )
  }
}
