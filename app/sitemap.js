import { getAllPosts } from "../lib/getPosts"
import images from "../components/Images"

export default async function sitemap() {
  const baseUrl = "https://dillonwalsh.com"

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
  }))

  const posts = getAllPosts()
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const routes = [
    "",
    "projects",
    "t1",
    "blog",
    "robots.txt",
    "sitemap.xml",
  ].map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }))

  return [...routes, ...projectUrls, ...postUrls]
}