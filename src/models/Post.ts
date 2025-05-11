export interface Post {
  id: string
  title: string
  content: string
  authorId: string
  category?: string
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}
