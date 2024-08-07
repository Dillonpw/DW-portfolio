export default function sitemap() {
  return [
    {
      url: "https://dillonwalsh.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://t1.dillonwalsh.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://blog.dillonwalsh.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://dillonwalsh.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://dillonwalsh.com/robots.txt",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://dillonwalsh.com/sitemap.xml",
      lastModified: new Date(),
      changeFrequency: "montlyh",
      priority: 0.1,
    },
  ];
}
