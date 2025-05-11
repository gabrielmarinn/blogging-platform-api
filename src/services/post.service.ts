import { posts } from '../database/posts'
import { Post } from '../models/Post'
import { randomUUID } from 'crypto'

export function createPost(
  title: string,
  content: string,
  authorId: string
): Post {
  const newPost: Post = {
    id: randomUUID(),
    title,
    content,
    authorId,
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
