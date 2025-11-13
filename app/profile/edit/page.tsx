'use client'

import { useState } from 'react'

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    displayName: 'John Doe',
    username: 'johndoe',
    bio: 'Community organizer passionate about making a difference',
    longBio: 'I have been involved in community organizing for over 5 years...',
    location: 'New York, NY',
    timezone: 'EST',
    website: 'https://johndoe.com',
    phone: '+1 (555) 123-4567',
    skills: 'Event Planning, Fundraising, Public Speaking',
    interests: 'Environment, Education, Social Justice',
    languages: 'English, Spanish',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    instagram: 'https://instagram.com/johndoe',
    isPublic: true,
    showEmail: true,
    showPhone: false,
    showLocation: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update
    console.log('Updating profile:', formData)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium mb-2">
                  Display Name
                </label>
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  value={formData.displayName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium mb-2">
                Short Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Brief description about yourself"
              />
            </div>

            <div>
              <label htmlFor="longBio" className="block text-sm font-medium mb-2">
                Full Bio
              </label>
              <textarea
                id="longBio"
                name="longBio"
                rows={6}
                value={formData.longBio}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us more about yourself"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium mb-2">
                  Timezone
                </label>
                <input
                  id="timezone"
                  name="timezone"
                  type="text"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="EST, PST, etc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-2">
                Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Skills & Interests</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="skills" className="block text-sm font-medium mb-2">
                Skills (comma-separated)
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Event Planning, Fundraising, Public Speaking"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium mb-2">
                Interests (comma-separated)
              </label>
              <input
                id="interests"
                name="interests"
                type="text"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Environment, Education, Social Justice"
              />
            </div>

            <div>
              <label htmlFor="languages" className="block text-sm font-medium mb-2">
                Languages (comma-separated)
              </label>
              <input
                id="languages"
                name="languages"
                type="text"
                value={formData.languages}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="English, Spanish, French"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="twitter" className="block text-sm font-medium mb-2">
                Twitter/X
              </label>
              <input
                id="twitter"
                name="twitter"
                type="url"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://twitter.com/username"
              />
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                LinkedIn
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                Instagram
              </label>
              <input
                id="instagram"
                name="instagram"
                type="url"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://instagram.com/username"
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>

          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="isPublic"
                name="isPublic"
                type="checkbox"
                checked={formData.isPublic}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="isPublic" className="ml-2 block text-sm">
                Make my profile public
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="showEmail"
                name="showEmail"
                type="checkbox"
                checked={formData.showEmail}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="showEmail" className="ml-2 block text-sm">
                Show email address on profile
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="showPhone"
                name="showPhone"
                type="checkbox"
                checked={formData.showPhone}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="showPhone" className="ml-2 block text-sm">
                Show phone number on profile
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="showLocation"
                name="showLocation"
                type="checkbox"
                checked={formData.showLocation}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="showLocation" className="ml-2 block text-sm">
                Show location on profile
              </label>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
