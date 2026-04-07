import BlogPostView from '@/components/BlogPostView'
import { getBlogPostBySlug } from '@/lib/blog-posts'

export default function BlogPost() {
  const post = getBlogPostBySlug('how-to-get-clients-sarasota')

  if (!post) {
    return null
  }

  return <BlogPostView post={post} />
}