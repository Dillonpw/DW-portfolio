import BlogPostList from "../../components/BlogPostList";
import { allPosts } from "/lib/blogPosts";

export default function BlogPage() {
  return (
    <div className="prose dark:prose-dark mx-auto mt-10">
      <h1 className="text-center text-4xl font-bold">Blog</h1>
      <BlogPostList posts={allPosts} />
    </div>
  );
}
