import { createUser } from '../services/user.service'
import { createPost } from '../services/post.service'
import { users } from '../database/users'
import { posts } from '../database/posts'

describe('createPost', () => {
  beforeEach(() => {
    users.length = 0
    posts.length = 0
  })

  it('Must create a post associated with a user', async () => {
    const user = await createUser('Gabriel', 'gabriel@email.com', '123456')
    const post = createPost('My first post', 'Post Content', user.id)

    expect(post).toHaveProperty('id')
    expect(post.title).toBe('My first post')
    expect(post.content).toBe('Post Content')
    expect(post.authorId).toBe(user.id)
  })
})
