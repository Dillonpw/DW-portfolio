import Link from "next/link";

const BlogPostList = ({ posts }) => {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      {posts.map((post) => (
        <div key={post.slug} className="mb-6">
          <Link href={`/blog/${post.slug}`}>
            <p className="text-2xl font-bold">{post.title}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
