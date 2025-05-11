import { createUser } from '../services/user.service'
import {
  createPost,
  getPostsByCategory,
  getPostsByTag,
} from '../services/post.service'
import { users } from '../database/users'
import { posts } from '../database/posts'

describe('Category and tag filters', () => {
  beforeEach(() => {
    users.length = 0
    posts.length = 0
  })

  it('Should return posts by category', async () => {
    const user = await createUser('Gabriel', 'gabriel@example.com', '123456')

    createPost('Tech Post', 'Content', user.id, 'technology', ['node'])
    createPost('Other', 'Content', user.id, 'cars', ['nascar'])

    const resultado = getPostsByCategory('technology')
    expect(resultado.length).toBe(1)
    expect(resultado[0].category).toBe('technology')
  })

  it('Should return posts by tag', async () => {
    const user = await createUser('Gabriel', 'gabriel@example.com', '123456')

    createPost('Post 1', 'Content', user.id, 'tech', ['node', 'typescript'])
    createPost('Post 2', 'Content', user.id, 'tech', ['javascript'])

    const resultado = getPostsByTag('typescript')
    expect(resultado.length).toBe(1)
    expect(resultado[0].tags?.includes('typescript')).toBe(true)
  })
})
