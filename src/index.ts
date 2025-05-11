import express from 'express'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import postRoutes from './routes/post.routes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(userRoutes)
app.use(authRoutes)
app.use(postRoutes)

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
