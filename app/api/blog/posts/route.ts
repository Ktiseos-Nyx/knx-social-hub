import { NextRequest, NextResponse } from 'next/server'
import { BlogService } from '@/lib/blog/blogService'

/**
 * GET /api/blog/posts
 * Get all published blog posts
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const isOrgBlog = searchParams.get('orgBlog') === 'true'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const posts = await BlogService.getPosts(isOrgBlog, page, limit)

    return NextResponse.json({
      success: true,
      data: posts,
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/blog/posts
 * Create a new blog post
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, excerpt, isOrgBlog, tags } = body

    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    // Validate input
    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: 'Title and content are required' },
        { status: 400 }
      )
    }

    const post = await BlogService.createPost(
      userId,
      title,
      content,
      isOrgBlog || false,
      tags || [],
      excerpt
    )

    return NextResponse.json({
      success: true,
      data: post,
    })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
