import { Router } from 'express'
import { handleCreatePost } from '../controllers/post.controller'
import { authenticate } from '../middlewares/auth.middleware'

const router = Router()

router.post('/posts', authenticate, handleCreatePost)

export default router
