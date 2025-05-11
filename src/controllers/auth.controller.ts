import { Request, Response } from 'express'
import { login } from '../services/auth.service'

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    const token = await login(email, password)
    return void res.status(200).json({ token })
  } catch (err: any) {
    return void res.status(401).json({ error: err.message })
  }
}
