
const BlogPost = ({ title, date, excerpt, children }) => {
  return (
    <article className="prose dark:prose-dark  mt-10">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <p className="text-center text-sm ">{date}</p>
      <p className="mt-2 text-center text-lg dark:text-gray-100">{excerpt}</p>
      <div className="mt-8 lg:mx-60">{children}</div>
    </article>
  );
};

export default BlogPost;
