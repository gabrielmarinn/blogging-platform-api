import { users } from '../database/users'
import { User } from '../models/User'
import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<Omit<User, 'password'>> {
  const existing = users.find((u) => u.email === email)
  if (existing) {
    throw new Error('Email already registered')
  }

  const hashed = await bcrypt.hash(password, 10)
  const newUser: User = {
    id: randomUUID(),
    name,
    email,
    password: hashed,
    createdAt: new Date(),
  }

  users.push(newUser)

  const { password: _, ...userWithoutPassword } = newUser
  return userWithoutPassword
}
