# KNX Social Hub

A Next.js-based social hub framework for non-profit organizations. This is a proof of concept that provides a comprehensive structure for building a community platform with chat, blogs, portfolios, and media galleries.

## Features

- **Events & Calendar**: Community events, volunteer opportunities, and RSVP management
- **User Profiles**: Comprehensive member profiles with skills, badges, and social connections
- **Authentication System**: User registration, login, and role-based access control (Admin, Member, Guest)
- **Discord-like Chat**: Real-time messaging with channels and direct messages
- **Blog System**:
  - Organization blog for official announcements (Admin only)
  - Personal blogs for members
  - Comments and tags support
- **Member Portfolios**: Showcase member work and projects
- **Media Gallery**: Upload and share images, videos, and audio
- **Admin Dashboard**: Comprehensive administration tools
- **Member Dashboard**: Personal space for members to manage their content

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Service-oriented with clear separation of concerns

## Project Structure

```
knx-social-hub/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── blog/                 # Blog endpoints
│   │   │   └── posts/
│   │   ├── chat/                 # Chat endpoints
│   │   │   └── channels/
│   │   ├── events/               # Event endpoints
│   │   │   └── [eventId]/rsvp/
│   │   ├── media/                # Media upload endpoints
│   │   │   └── upload/
│   │   ├── portfolio/            # Portfolio endpoints
│   │   └── profile/              # Profile endpoints
│   │       └── follow/
│   ├── auth/                     # Auth pages
│   │   ├── login/
│   │   └── register/
│   ├── blog/                     # Blog pages
│   │   └── new/
│   ├── chat/                     # Chat interface
│   ├── dashboard/                # Member dashboard
│   ├── events/                   # Events pages
│   │   ├── new/
│   │   └── calendar/
│   ├── media/                    # Media gallery
│   ├── portfolio/                # Portfolio showcase
│   ├── profile/                  # User profiles
│   │   ├── [username]/
│   │   ├── edit/
│   │   └── members/
│   ├── admin/                    # Admin dashboard
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # Reusable components
│   ├── auth/
│   ├── blog/
│   ├── chat/
│   ├── media/
│   ├── portfolio/
│   └── shared/
├── lib/                          # Business logic & services
│   ├── auth/
│   │   └── authService.ts        # Authentication service
│   ├── blog/
│   │   └── blogService.ts        # Blog service
│   ├── chat/
│   │   └── chatService.ts        # Chat service
│   ├── events/
│   │   └── eventService.ts       # Event service
│   ├── media/
│   │   └── mediaService.ts       # Media service
│   ├── portfolio/
│   │   └── portfolioService.ts   # Portfolio service
│   ├── profile/
│   │   └── profileService.ts     # Profile service
│   └── db/                       # Database utilities (to be implemented)
├── types/
│   └── index.ts                  # TypeScript type definitions
├── public/                       # Static assets
│   ├── images/
│   └── uploads/
│       ├── audio/
│       └── video/
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd knx-social-hub
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Core Modules

### 1. Events & Calendar (`/lib/events/`)
- Event creation and management
- RSVP system with capacity limits
- Calendar view (monthly)
- Virtual and in-person events
- Recurring events support
- Event comments and discussions
- Volunteer role assignments

**Pages**: `/events`, `/events/new`, `/events/calendar`, `/events/[slug]`

### 2. User Profiles (`/lib/profile/`)
- Comprehensive user profiles
- Skills, interests, and languages
- Social connections (follow/unfollow)
- Achievement badges
- Volunteer hours tracking
- Privacy controls
- Member directory

**Pages**: `/profile/[username]`, `/profile/edit`, `/profile/members`

### 3. Authentication (`/lib/auth/`)
- User registration and login
- Role-based access control (Admin, Member, Guest)
- Session management
- Password reset functionality

**Pages**: `/auth/login`, `/auth/register`

### 4. Chat System (`/lib/chat/`)
- Public and private channels
- Direct messaging
- Message threading and replies
- File attachments in messages

**Pages**: `/chat`

### 5. Blog System (`/lib/blog/`)
- **Organization Blog**: Official posts by admins
- **Member Blogs**: Personal posts by members
- Draft and publish workflow
- Comments and reactions
- Tag-based organization

**Pages**: `/blog`, `/blog/new`

### 6. Portfolio System (`/lib/portfolio/`)
- Personal portfolio for each member
- Project showcase with media
- Public/private visibility controls
- Tags and external links

**Pages**: `/portfolio`, `/portfolio/[username]`

### 7. Media Gallery (`/lib/media/`)
- Image uploads and galleries
- Video hosting and playback
- Audio/podcast hosting
- Media collections and playlists

**Pages**: `/media`

### 8. Dashboard (`/dashboard`)
- Personal activity feed
- Quick stats
- Content management shortcuts
- Recent activity log

### 9. Admin Panel (`/admin`)
- User management
- Content moderation
- Channel management
- System settings
- Analytics

## API Routes

All API routes follow RESTful conventions and return JSON responses:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Events
- `GET /api/events` - Get events (upcoming, past, or by month)
- `POST /api/events` - Create new event
- `GET /api/events/[eventId]/rsvp` - Get event RSVPs
- `POST /api/events/[eventId]/rsvp` - RSVP to event

### Profile
- `GET /api/profile` - Get user profile(s)
- `PUT /api/profile` - Update user profile
- `POST /api/profile/follow` - Follow a user
- `DELETE /api/profile/follow` - Unfollow a user

### Chat
- `GET /api/chat/channels` - Get user's channels
- `POST /api/chat/channels` - Create new channel
- `GET /api/chat/messages` - Get channel messages
- `POST /api/chat/messages` - Send message

### Blog
- `GET /api/blog/posts` - Get all posts
- `POST /api/blog/posts` - Create new post
- `GET /api/blog/posts/[slug]` - Get specific post
- `PUT /api/blog/posts/[id]` - Update post
- `DELETE /api/blog/posts/[id]` - Delete post

### Portfolio
- `GET /api/portfolio` - Get portfolios
- `POST /api/portfolio` - Create portfolio
- `POST /api/portfolio/projects` - Add project

### Media
- `POST /api/media/upload` - Upload media file
- `GET /api/media/upload` - Get user media
- `GET /api/media/gallery` - Get public galleries

## Type Definitions

All TypeScript types are defined in `/types/index.ts`:

- `User` - User account data
- `UserProfile` - Enhanced user profile with skills, badges, and stats
- `Event` - Event data with RSVP and calendar support
- `EventRSVP` - Event RSVP status
- `Follow` - User follow relationship
- `UserBadge` - Achievement badges
- `ChatChannel` - Chat channel structure
- `ChatMessage` - Message structure
- `BlogPost` - Blog post data
- `Portfolio` - Portfolio structure
- `PortfolioProject` - Individual project
- `MediaAttachment` - Media file metadata
- `MediaGallery` - Media collection

## Development Roadmap

### Immediate Next Steps
1. **Database Integration**: Implement actual database (PostgreSQL, MongoDB, or Supabase)
2. **Authentication**: Add JWT tokens or session-based auth
3. **Real-time Chat**: Implement WebSocket or Socket.io for live messaging
4. **File Upload**: Integrate cloud storage (S3, Cloudinary)
5. **Rich Text Editor**: Add markdown or WYSIWYG editor for blogs
6. **User Profiles**: Create detailed user profile pages

### Future Enhancements
- Email notifications
- Search functionality
- Mobile app (React Native)
- Social features (likes, shares, follows)
- Event management system
- Donation/fundraising integration
- Analytics dashboard
- Multi-language support

## Customization

This framework is designed to be customized. Key areas to modify:

1. **Branding**: Update colors in `tailwind.config.ts` and `globals.css`
2. **Features**: Add/remove modules based on your needs
3. **User Roles**: Extend the `UserRole` enum in `/types/index.ts`
4. **Database Schema**: Implement your preferred database with the type definitions
5. **UI Components**: Build out the component library in `/components/`

## Contributing

This is a proof of concept framework. Contributions are welcome!

## License

See LICENSE file for details.

## Support

For questions or support, please open an issue on GitHub.

---

**Note**: This is a framework/proof of concept. All service methods currently return mock data. You will need to implement:
- Database connection and models
- Authentication middleware
- File upload handling
- WebSocket for real-time chat
- Email service
- Payment integration (if needed)
