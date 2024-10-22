import Image from "next/image";

const BlogPost = ({ title, date, excerpt, coverImage, children }) => {
  return (
    <article className="prose dark:prose-dark mx-auto mt-10">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <p className="text-center text-sm ">{date}</p>
      <p className="mt-2 text-center text-lg dark:text-gray-100">{excerpt}</p>
      <div className="mt-8">{children}</div>
    </article>
  );
};

export default BlogPost;
