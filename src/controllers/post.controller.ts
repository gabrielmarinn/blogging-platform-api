import { Request, Response } from 'express'
import { createPost } from '../services/post.service'
import { getAllPosts } from '../services/post.service'
import { getPostById } from '../services/post.service'

export function handleCreatePost(req: Request, res: Response) {
  const { title, content } = req.body
  const userId = req.userId!

  const post = createPost(title, content, userId)
  return void res.status(201).json(post)
}

export function handleGetAllPosts(req: Request, res: Response) {
  const allPosts = getAllPosts()
  return void res.status(200).json(allPosts)
}

export function handleGetPostById(req: Request, res: Response) {
  const { id } = req.params
  try {
    const post = getPostById(id)
    return void res.status(200).json(post)
  } catch (err: any) {
    return void res.status(404).json({ error: err.message })
  }
}
