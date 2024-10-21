import BlogPostList from "../../components/BlogPostList";
import { allPosts } from "/lib/blogPosts";

export default function BlogPage() {
  return (
    <div className="prose mx-auto mt-10 dark:prose-dark">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <BlogPostList posts={allPosts} />
    </div>
  );
}
