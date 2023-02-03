/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { IMovie } from '@/types/types';
import { jsx } from 'theme-ui'


const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'

export const getStaticPaths = async () => {
  const defaultEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&primary_release_date.gte=1960-01-01&primary_release_date.lte=1969-12-31&with_keywords=space&sort_by=release_date.asc`;
  const res = await fetch(defaultEndPoint);
  const data = await res.json();
  const movies = data.results
  const paths = movies.map( (movie:any) =>{
    return {
      params: { id: movie.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
}
}


export const getStaticProps = async (context:any) => {
  const id = context.params.id
  const defaultEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=b7e763dc89359ad28e83964b5a12b539&language=en-US` 
  const res = await fetch(defaultEndPoint);
  const data = await res.json();

  return {
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