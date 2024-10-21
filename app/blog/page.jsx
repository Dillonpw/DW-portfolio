import BlogPostList from "../../components/BlogPostList";
import Link from "next/link";
import NavBar from "../../components/nav";
import { allPosts } from "/lib/blogPosts";

export default function BlogPage() {
  return (
    <main>
      <NavBar>
        <Link href="/blog">blog</Link>
      </NavBar>
      <BlogPostList posts={allPosts} />
    </main>
  );
}
