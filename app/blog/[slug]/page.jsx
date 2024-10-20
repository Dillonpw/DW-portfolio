import Image from 'next/image'
import { getAllPosts, getPostBySlug } from '/lib/api'
import { notFound } from 'next/navigation'
import BlogPostContent from '/components/BlogPostContent.jsx'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://yourdomain.com/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage || 'https://yourdomain.com/default-og-image.jpg',
        },
      ],
    },
  }
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)

  if (!post) notFound()

  return (
    <article className="max-w-2xl mx-auto mt-8">
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={630}
          className="rounded-lg shadow-md mb-8"
        />
      )}
      <BlogPostContent post={post} />
    </article>
  )
}