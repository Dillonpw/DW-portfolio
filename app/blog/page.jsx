import BlogPostList from "../../components/BlogPostList";
import Link from "next/link";
import NavBar from "../../components/nav";
import { allPosts } from "/lib/blogPosts";

export default function BlogPage() {
  return (
    <main>
      <NavBar>
        <Link
          href="/blog"
          className="text-center font-mono text-xl lg:text-2xl"
        >
          blog
        </Link>
      </NavBar>
      <BlogPostList posts={allPosts} />
    </main>
  );
}
