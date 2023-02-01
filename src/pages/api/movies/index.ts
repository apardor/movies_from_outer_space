import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { GetStaticProps } from 'next';



const handler =nc()
.get(async(req:  NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'Api working' }))
})

export default handler;