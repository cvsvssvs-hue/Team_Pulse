import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog-posts'

const baseUrl = 'https://teampulse.marketing'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/process',
    '/contact',
    '/case-studies',
    '/blog',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }))

  return [...staticEntries, ...blogEntries]
}
