/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { IRoutes } from '@/types/types';
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Page : React.FC = () => {

    const router: NextRouter = useRouter();

    const { id } = router.query as IRoutes;

  return (
    <div sx={{variant: 'containers.page'}}>
    <h1>Movie: {id} </h1>
  </div>
  )
}

export default Page