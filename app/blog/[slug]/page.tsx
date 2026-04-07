import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostView from '@/components/BlogPostView'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog-posts'

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Team Pulse Marketing`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://teampulse.marketing/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://teampulse.marketing/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostView post={post} />
}
