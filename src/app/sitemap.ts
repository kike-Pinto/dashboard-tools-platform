import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dashboard-tools-platform.vercel.app'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
      url: `${baseUrl}/dashboard/hh-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/dashboard/maintenance-kpi-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/dashboard/project-kpi-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/dashboard/fuel-consumption-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/dashboard/workforce-productivity-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
