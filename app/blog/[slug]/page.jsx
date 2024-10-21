import BlogPost from "../../../components/BlogPost";
import { allPosts } from "/lib/blogPosts";

const getPostBySlug = (slug) => {
  return allPosts.find((post) => post.slug === slug);
};

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) return <p>Post not found</p>;

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      excerpt={post.excerpt}
      coverImage={post.coverImage}
    >
      {post.content}
    </BlogPost>
  );
}
