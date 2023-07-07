import type { VercelRequest, VercelResponse } from '@vercel/node'
import getData from '../src/mongo'
import verifyJwtAndCheckId from '../src/jwt'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const {
    method = ''
  } = req
  const arr = ['GET', 'PUT', 'POST']
  if (!arr.includes(method)) {
    return res.status(404).send('404 not found')
  }
  const id = verifyJwtAndCheckId(req)
  if (typeof id !== 'string') {
    return res.status(401).send(id)
  }
  let r = method === 'POST'
    ? 'test ok'
    : await getData(id, method === 'GET' ? undefined : req.body)
  res.status(r ? 200 : 404).send(r || '404')
}
