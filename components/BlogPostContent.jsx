'use client'

import { MDXRemote } from 'next-mdx-remote'

export default function BlogPostContent({ post }) {
  return (
    <article className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </article>
  )
}