"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts } from '../lib/getPosts';


const BlogPostList = () => {
const posts = getAllPosts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: -30 }}
      className="mt-20 flex flex-col"
    >
      <div className="mx-auto mt-10 max-w-3xl">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="mb-6 rounded-md p-6 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Link href={`/blog/${post.slug}`}>
              <p className="text-2xl font-bold">{post.title}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700 dark:text-white">
                {post.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPostList;
