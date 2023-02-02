/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { IRoutes } from '@/types/types';
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { GetServerSideProps } from 'next';
import { IMovie } from '@/types/types';


const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const defaultEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=b7e763dc89359ad28e83964b5a12b539&language=en-US` 
  const res = await fetch(defaultEndPoint);
  const data = await res.json();
  return{
      props: {
        data
      }
    }
  }



const Page = ({ data }: IMovie) => {
 

  return (
  
    <div sx={{variant: 'containers.page'}}>
    {data.status_message ? <p>The resource you requested could not be found.</p> : ''}
    <h1>{data.original_title} </h1>
    <img sx={{width: '100%'}} src={`${imageDefaultEndPoint}${data.poster_path}`} alt={data.original_title} />
    { data.spoken_languages ? <h3>Language: {data.spoken_languages.map(el => el.english_name)}</h3> : ''}
    <p>{data.overview}</p>
  </div>
  )
}

export default Page