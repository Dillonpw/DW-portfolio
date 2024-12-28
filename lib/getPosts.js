import { allPosts } from './blogPosts'

export function getAllPosts() {
  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}