import Link from 'next/link'
import { getAllPosts } from '/lib/api'

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read my latest thoughts and insights',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  if (posts.length === 0) {
    return <p>No posts available.</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}