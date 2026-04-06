import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://teampulse.marketing',
      lastModified: new Date(),
    },
    {
      url: 'https://teampulse.marketing/services',
      lastModified: new Date(),
    },
    {
      url: 'https://teampulse.marketing/contact',
      lastModified: new Date(),
    },
  ]
}
