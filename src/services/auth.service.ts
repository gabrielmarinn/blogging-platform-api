import { users } from '../database/users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'secret-very-strong'

export async function login(email: string, password: string): Promise<string> {
  const user = users.find((u) => u.email === email)
  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1H' })
  return token
}
