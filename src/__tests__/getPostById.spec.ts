import { createUser } from '../services/user.service'
import { createPost, getPostById } from '../services/post.service'
import { users } from '../database/users'
import { posts } from '../database/posts'

describe('getPostById', () => {
  beforeEach(() => {
    users.length = 0
    posts.length = 0
  })

  it('Should return the post with the correct id', async () => {
    const user = await createUser('Gabriel', 'gabriel@email.com', '123456')
    const post = createPost('Title', 'Content', user.id)

    const result = getPostById(post.id)

    expect(result.id).toBe(post.id)
    expect(result.title).toBe('Title')
  })

  it("Should throw the error if it doesn't exists", () => {
    expect(() => getPostById('id-invalid')).toThrow('Post not found')
  })
})
