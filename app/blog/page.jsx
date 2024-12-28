import BlogPostList from "../../components/BlogPostList";
import Link from "next/link";
import NavBar from "../../components/nav";
import { allPosts } from "/lib/blogPosts";

export const metadata = {
  title: "Blog | Dillonwalsh.com",
  description: "Read our latest blog posts and articles.",
  openGraph: {
    title: "Blog | Dillonwalsh.com",
    description: "Read our latest blog posts and articles.",
    type: "website",
    url: "https://www.dillonwalsh.com/blog",
  },
  twitter: {
    card: "/twiiter-img.png",
    title: "Blog | Dillonwalsh.com",
    description: "Read our latest blog posts and articles.",
  },
};

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

