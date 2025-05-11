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
