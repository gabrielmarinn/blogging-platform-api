import { createUser } from '../services/user.service'
import { createPost, updatePost, deletePost } from '../services/post.service'
import { posts } from '../database/posts'
import { users } from '../database/users'

describe('updatePost and deletePost', () => {
  beforeEach(() => {
    users.length = 0
    posts.length = 0
  })

  it('Should allow the author to update the post', async () => {
    const user = await createUser('Gabriel', 'gabriel@email.com', '123456')
    const post = createPost('Title', 'Content', user.id)

    const update = updatePost(post.id, 'New Title', 'New Content', user.id)

    expect(update.title).toBe('New Title')
    expect(update.content).toBe('New Content')
  })

  it('Should not allow another user to update the post', async () => {
    const user1 = await createUser('Gabriel', 'gabriel@email.com', '123456')
    const user2 = await createUser('Maria', 'maria@email.com', '12345678')
    const post = createPost('Title', 'Content', user1.id)

    expect(() => {
      updatePost(post.id, 'Hacked', 'Malware', user2.id)
    }).toThrow('Action not permitted')
  })

  it('Should allow the author to delete the post', async () => {
    const user = await createUser('Gabriel', 'gabriel@email.com', '123456')
    const post = createPost('Title', 'Content', user.id)

    deletePost(post.id, user.id)
    expect(posts.length).toBe(0)
  })

  it('Should not allow another user to delete the post', async () => {
    const user1 = await createUser('Gabriel', 'gabriel@email.com', '123456')
    const user2 = await createUser('Maria', 'maria@email.com', '12345678')
    const post = createPost('Title', 'Content', user1.id)

    expect(() => {
      deletePost(post.id, user2.id)
    }).toThrow('Action not permitted')
  })
})
