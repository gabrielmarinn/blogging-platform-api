import { Request, Response } from 'express'
import {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByCategory,
  getPostsByTag,
  updatePost,
  deletePost,
} from '../services/post.service'

export function handleCreatePost(req: Request, res: Response) {
  const { title, content } = req.body
  const userId = req.userId!

  const post = createPost(title, content, userId)
  return void res.status(201).json(post)
}

export function handleGetAllPosts(req: Request, res: Response) {
  const allPosts = getAllPosts()
  const { category, tag } = req.query

  if (category) {
    const results = getPostsByCategory(String(category))
    return void res.status(200).json(results)
  }

  if (tag) {
    const results = getPostsByTag(String(tag))
    return void res.status(200).json(results)
  }

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

export function handleUpdatePost(req: Request, res: Response) {
  const { id } = req.params
  const { title, content } = req.body
  const userId = req.userId!

  try {
    const updated = updatePost(id, title, content, userId)
    return void res.status(200).json(updated)
  } catch (err: any) {
    return void res.status(403).json({ error: err.message })
  }
}

export function handleDeletePost(req: Request, res: Response) {
  const { id } = req.params
  const userId = req.userId!

  try {
    deletePost(id, userId)
    return void res.status(204).send()
  } catch (err: any) {
    return void res.status(403).json({ error: err.message })
  }
}
