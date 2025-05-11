import { Request, Response } from 'express'
import { createUser } from '../services/user.service'

export async function registerUser(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body
    const user = await createUser(name, email, password)
    return void res.status(201).json(user)
  } catch (err: any) {
    return void res.status(400).json({ error: err.message })
  }
}
