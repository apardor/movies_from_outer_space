import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { IRoutes } from '@/types/types';

const Page : React.FC = () => {

    const router: NextRouter = useRouter();

    const { id } = router.query as IRoutes;

  return (
    <h1> Note {id}</h1>
  )
}

export default Page