import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'


const handler =nc()
.get(async(req:  NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'API working in id' }))

})

export default handler;