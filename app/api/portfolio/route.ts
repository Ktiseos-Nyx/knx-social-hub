import { NextRequest, NextResponse } from 'next/server'
import { PortfolioService } from '@/lib/portfolio/portfolioService'

/**
 * GET /api/portfolio
 * Get user's portfolio or public portfolios
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId')

    if (userId) {
      // Get specific user's portfolio
      const portfolio = await PortfolioService.getUserPortfolio(userId)
      return NextResponse.json({
        success: true,
        data: portfolio,
      })
    } else {
      // Get all public portfolios
      const portfolios = await PortfolioService.getPublicPortfolios()
      return NextResponse.json({
        success: true,
        data: portfolios,
      })
    }
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch portfolio' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/portfolio
 * Create a new portfolio
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, isPublic } = body

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    if (!title) {
      return NextResponse.json(
        { success: false, error: 'Title is required' },
        { status: 400 }
      )
    }

    const portfolio = await PortfolioService.createPortfolio(
      userId,
      title,
      description,
      isPublic !== false
    )

    return NextResponse.json({
      success: true,
      data: portfolio,
    })
  } catch (error) {
    console.error('Error creating portfolio:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create portfolio' },
      { status: 500 }
    )
  }
}
