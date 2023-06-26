import { VercelRequest } from '@vercel/node'
import jwt from 'jsonwebtoken'

interface JwtPayload {
  id: string;
}

export default function verifyJwtAndCheckId (req: VercelRequest): Error | string {
  try {
    const jwtSecret = process.env.JWT_SECRET || ''
    const ids = (process.env.JWT_USERS || '').split(',')
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('No authorization header found')
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      throw new Error('No token found in the authorization header')
    }

    const decodedPayload: JwtPayload = jwt.verify(token, jwtSecret) as JwtPayload

    if (ids.includes(decodedPayload.id)) {
      return decodedPayload.id
    } else {
      throw new Error('user not found')
    }
  } catch (error) {
    console.error('JWT verification error:', error)
    return error as Error
  }
}
