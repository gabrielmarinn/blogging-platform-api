import { Request, Response } from 'express'
import { createPost } from '../services/post.service'

export function handleCreatePost(req: Request, res: Response) {
  const { title, content } = req.body
  const userId = req.userId!

  const post = createPost(title, content, userId)
  return void res.status(201).json(post)
}
