import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import NavBar from "../../../components/nav";
import { allPosts } from "/lib/blogPosts";

const getPostBySlug = (slug) => {
  return allPosts.find((post) => post.slug === slug);
};

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Dillonwalsh.com",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Dillonwalsh.com`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Dillonwalsh.com`,
      description: post.excerpt,
      type: "article",
      url: `https://www.dillonwalsh.com/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "twitter-img.png",
      title: `${post.title} | Dillonwalsh.com`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
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

