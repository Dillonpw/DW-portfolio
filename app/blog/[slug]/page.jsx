import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import NavBar from "../../../components/nav";
import { allPosts } from "/lib/blogPosts";

const getPostBySlug = (slug) => {
  return allPosts.find((post) => post.slug === slug);
};

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <NavBar>
        <Link
          className="text-center font-mono text-xl lg:text-2xl"
          href="/blog"
        >
          blog
        </Link>
      </NavBar>
      <BlogPost title={post.title} date={post.date} excerpt={post.excerpt}>
        {post.content}
      </BlogPost>
    </>
  );
}
