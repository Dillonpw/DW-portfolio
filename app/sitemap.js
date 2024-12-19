import { MetadataRoute } from "next";
import { getAllPosts } from "../lib/getPosts";
import images from "../components/Images";

export default async function sitemap() {
  const baseUrl = "https://dillonwalsh.com";

  // Dynamic project pages
  const projectUrls = images.map((project) => ({
    url: `${baseUrl}/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      {
        loc: `${baseUrl}${project.src}`,
        title: project.title,
      },
    ],
  }));

  // Dynamic blog posts
  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Static routes
  const routes = [
    "",
    "projects",
    "t1",
    "blog",
    "robots.txt",
    "sitemap.xml",
    "about", // Adding common app router pages
    "contact",
    "services",
    "reviews",
    "faq",
  ].map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  // Subdomain routes
  const subdomainRoutes = ["t1"].map((route) => ({
    url: `https://${route}.dillonwalsh.com`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return [...subdomainRoutes, ...routes, ...projectUrls, ...postUrls];
}
