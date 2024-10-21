import { allPosts } from './blogPosts'

export function getAllPosts() {
  // Sort posts by date
  return allPosts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}