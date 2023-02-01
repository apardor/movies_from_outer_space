// import type { NextApiRequest, NextApiResponse } from 'next'
// import nc from 'next-connect'
// import { GetStaticProps } from 'next';



// const defaultEndPoint = 'https://rickandmortyapi.com/api/character';

// export const getStaticProps: GetStaticProps = async () => {
// const res = await fetch(defaultEndPoint);
// const data = await res.json();
// return{
//     props: {
//       data
//     }
//   }
// }

// const handler =nc([data])
// .get(async(req:  NextApiRequest, res: NextApiResponse) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: {data} }))
// })

// export default handler;