import { Router } from 'express'
import {
  handleCreatePost,
  handleGetAllPosts,
  handleGetPostById,
  handleUpdatePost,
  handleDeletePost,
} from '../controllers/post.controller'
import { authenticate } from '../middlewares/auth.middleware'

const router = Router()

router.post('/posts', authenticate, handleCreatePost)
router.get('/posts', handleGetAllPosts)
router.get('/posts/:id', handleGetPostById)
router.put('/posts/:id', authenticate, handleUpdatePost)
router.delete('/posts/:id', authenticate, handleDeletePost)

export default router
