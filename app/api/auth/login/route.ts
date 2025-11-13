import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/lib/auth/authService'

/**
 * POST /api/auth/login
 * Login endpoint
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Attempt login
    const session = await AuthService.login({ email, password })

    return NextResponse.json({
      success: true,
      data: session,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    )
  }
}
