import { Router } from 'express'
import { handleCreatePost } from '../controllers/post.controller'
import { authenticate } from '../middlewares/auth.middleware'
import { handleGetAllPosts } from '../controllers/post.controller'
import { handleGetPostById } from '../controllers/post.controller'

const router = Router()

router.post('/posts', authenticate, handleCreatePost)
router.get('/posts', handleGetAllPosts)
router.get('/posts/:id', handleGetPostById)

export default router
