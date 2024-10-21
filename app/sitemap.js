import { getAllProjects } from "/lib/projects";
import { getAllPosts } from "/lib/blogPosts";
import images from "/components/Images.jsx"; 

export default async function sitemap() {
  const baseUrl = "https://dillonwalsh.com";

  const projects = await getAllProjects();
  
  const projectUrls = projects.map((project) => {
    const projectImage = images.find((img) => img.id === project.id);

    return {
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(project.updatedAt),
      changeFrequency: "monthly",
      priority: 0.8,
      images: projectImage ? [{
        loc: `${baseUrl}${projectImage.src}`,
        title: projectImage.title,
      }] : [],
    };
  });

  // Fetch all blog posts
  const posts = await getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Define static routes
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
  }));

  return [...routes, ...projectUrls, ...postUrls];
}
