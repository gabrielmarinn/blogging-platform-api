import { createUser } from '../services/user.service'
import { createPost, getAllPosts } from '../services/post.service'
import { posts } from '../database/posts'
import { users } from '../database/users'

describe('getAllPosts', () => {
  beforeEach(() => {
    users.length = 0
    posts.length = 0
  })

  it('Should return all existing posts', async () => {
    const user = await createUser('Gabriel', 'gabriel@email.com', '123456')
    createPost('Post 1', 'Content 1', user.id)
    createPost('Post 2', 'Content 2', user.id)

    const result = getAllPosts()

    expect(result.length).toBe(2)
    expect(result[0].title).toBe('Post 1')
    expect(result[1].title).toBe('Post 2')
  })
})
