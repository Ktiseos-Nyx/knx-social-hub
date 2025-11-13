import { NextRequest, NextResponse } from 'next/server'
import { MediaService } from '@/lib/media/mediaService'

/**
 * POST /api/media/upload
 * Upload media file
 */
export async function POST(request: NextRequest) {
  try {
    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      )
    }

    // Determine media type from mime type
    let type: 'image' | 'video' | 'audio' | 'document' = 'document'
    if (file.type.startsWith('image/')) type = 'image'
    else if (file.type.startsWith('video/')) type = 'video'
    else if (file.type.startsWith('audio/')) type = 'audio'

    // Upload media
    const media = await MediaService.uploadMedia(file, userId, type)

    return NextResponse.json({
      success: true,
      data: media,
    })
  } catch (error) {
    console.error('Error uploading media:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to upload media' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/media/upload
 * Get user's uploaded media
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Get userId from session/token
    const userId = 'current_user_id'

    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') as 'image' | 'video' | 'audio' | 'document' | null

    const media = await MediaService.getUserMedia(userId, type || undefined)

    return NextResponse.json({
      success: true,
      data: media,
    })
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch media' },
      { status: 500 }
    )
  }
}
