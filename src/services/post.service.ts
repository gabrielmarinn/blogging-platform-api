import { posts } from '../database/posts'
import { Post } from '../models/Post'
import { randomUUID } from 'crypto'

export function createPost(
  title: string,
  content: string,
  authorId: string,
  category?: string,
  tags?: string[]
): Post {
  const newPost: Post = {
    id: randomUUID(),
    title,
    content,
    authorId,
    category,
    tags,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  posts.push(newPost)
  return newPost
}

export function getAllPosts() {
  return posts
}

export function getPostById(id: string) {
  const post = posts.find((p) => p.id === id)
  if (!post) {
    throw new Error('Post not found')
  }
  return post
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(
    (p) => p.category?.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags?.includes(tag))
}

export function updatePost(
  id: string,
  title: string,
  content: string,
  requesterId: string
): Post {
  const post = posts.find((p) => p.id === id)
  if (!post) throw new Error('Post not found')
  if (post.authorId !== requesterId) throw new Error('Action not permitted')

  post.title = title
  post.content = content
  post.updatedAt = new Date()
  return post
}

export function deletePost(id: string, requesterId: string): void {
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) throw new Error('Post not found')
  if (posts[index].authorId !== requesterId)
    throw new Error('Action not permitted')
  posts.splice(index, 1)
}
