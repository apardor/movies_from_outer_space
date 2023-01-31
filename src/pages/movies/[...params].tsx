import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { IRoutes } from '@/types/types';

const PageParams : React.FC = () => {

    const router: NextRouter = useRouter();

    const { params } = router.query as IRoutes;

  return (
    <h1> Note { params }</h1>
  )
}

export default PageParams