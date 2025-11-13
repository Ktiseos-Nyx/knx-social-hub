// User Types
export enum UserRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  GUEST = 'GUEST',
}

export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Authentication Types
export interface AuthSession {
  user: User;
  token: string;
  expiresAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
  displayName: string;
}

// Chat/Messaging Types
export interface ChatChannel {
  id: string;
  name: string;
  description?: string;
  type: 'public' | 'private' | 'direct';
  memberIds: string[];
  createdBy: string;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  channelId: string;
  userId: string;
  content: string;
  attachments?: MediaAttachment[];
  replyToId?: string;
  createdAt: Date;
  updatedAt?: Date;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  authorId: string;
  isOrgBlog: boolean; // True for admin/organization posts
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  featuredImage?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export interface BlogComment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  parentId?: string; // For nested comments
  createdAt: Date;
}

// Portfolio Types
export interface Portfolio {
  id: string;
  userId: string;
  title: string;
  description?: string;
  isPublic: boolean;
  projects: PortfolioProject[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioProject {
  id: string;
  portfolioId: string;
  title: string;
  description: string;
  media: MediaAttachment[];
  tags: string[];
  externalLink?: string;
  order: number;
  createdAt: Date;
}

// Media Types
export interface MediaAttachment {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document';
  url: string;
  thumbnail?: string;
  filename: string;
  mimeType: string;
  size: number;
  uploadedBy: string;
  createdAt: Date;
}

export interface MediaGallery {
  id: string;
  title: string;
  description?: string;
  items: MediaAttachment[];
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  isVirtual: boolean;
  virtualLink?: string;
  capacity?: number;
  currentAttendees: number;
  organizerId: string;
  coverImage?: string;
  tags: string[];
  isRecurring: boolean;
  recurrenceRule?: string; // RRULE format for recurring events
  status: 'draft' | 'published' | 'cancelled' | 'completed';
  requiresApproval: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventRSVP {
  id: string;
  eventId: string;
  userId: string;
  status: 'going' | 'interested' | 'not_going';
  response?: string; // Optional response/note
  volunteerRole?: string; // For volunteer events
  createdAt: Date;
  updatedAt: Date;
}

export interface EventComment {
  id: string;
  eventId: string;
  userId: string;
  content: string;
  parentId?: string;
  createdAt: Date;
}

// Enhanced User Profile Types
export interface UserProfile {
  userId: string;
  user: User;

  // Contact & Location
  phone?: string;
  location?: string;
  timezone?: string;
  website?: string;
  socialLinks?: SocialLinks;

  // Profile Content
  bio?: string;
  longBio?: string;
  coverImage?: string;

  // Skills & Interests
  skills: string[];
  interests: string[];
  languages: string[];

  // Organization Specific
  memberSince?: Date;
  volunteeredHours?: number;
  badges: UserBadge[];

  // Stats
  followersCount: number;
  followingCount: number;
  postsCount: number;
  eventsAttended: number;

  // Privacy Settings
  isPublic: boolean;
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  website?: string;
}

export interface UserBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

export interface Follow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
