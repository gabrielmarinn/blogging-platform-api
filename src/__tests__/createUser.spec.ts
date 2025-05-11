import { createUser } from '../services/user.service'
import { users } from '../database/users'

describe('createUser', () => {
  beforeEach(() => (users.length = 0)) //memory reset every test

  it('must successfully create a new user', async () => {
    const user = await createUser('Gabriel', 'gabriel@email.com', '123456')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name', 'Gabriel')
    expect(user).not.toHaveProperty('password')
  })

  it('Should not allow registration with repeated emails', async () => {
    await createUser('Gabriel', 'gabriel@email.com', '123456')
    await expect(
      createUser('Outro', 'gabriel@email.com', 'senha')
    ).rejects.toThrow('Email already registered')
  })
})
