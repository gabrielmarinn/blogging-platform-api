import { createUser } from '../services/user.service'
import { login } from '../services/auth.service'
import { users } from '../database/users'
import jwt from 'jsonwebtoken'

describe('login', () => {
  beforeEach(() => (users.length = 0))

  it('Should return a valid token when logging in', async () => {
    await createUser('Gabriel', 'gabriel@email.com', '123456')
    const token = await login('gabriel@email.com', '123456')

    const decoded = jwt.decode(token) as any
    expect(decoded).toHaveProperty('userId')
  })

  it('Should fail when trying to log in with the wrong password', async () => {
    await createUser('Gabriel', 'gabriel@email.com', '123456')
    await expect(login('gabriel@email.com', 'wrongPassword')).rejects.toThrow(
      'Invalid credentials'
    )
  })

  it('Should fail when trying to log in with non-existent email', async () => {
    await expect(login('non-exists@email.com', '123456')).rejects.toThrow(
      'Invalid credentials'
    )
  })
})
