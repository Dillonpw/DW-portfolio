import Image from "next/image";

const BlogPost = ({ title, date, excerpt, coverImage, children }) => {
  return (
    <article
      className="prose mx-auto mt-10 dark:prose-dark"
    >
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-sm text-gray-500 text-center">{date}</p>
      <p className="mt-2 text-lg text-gray-700 text-center">{excerpt}</p>
      <Image
        src={coverImage}
        alt={title}
        width={800}
        height={400}
        className="rounded-lg mx-auto my-4"
      />
      <div className="mt-8">{children}</div>
    </article>
  );
};

export default BlogPost;
