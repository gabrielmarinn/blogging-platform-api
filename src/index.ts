import express from 'express'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(userRoutes)
app.use(authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
