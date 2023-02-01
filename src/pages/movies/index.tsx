/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next';
import { IMovies } from '@/types/types';

const api_key = process.env.API_KEY;
const defaultEndPoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'



export const getStaticProps: GetStaticProps = async () => {
const res = await fetch(defaultEndPoint);
const data = await res.json();
return{
    props: {
      data
    }
  }
}


const index = ({ data }: IMovies) => {

  const movies = data.results;
  return (
    <div>
        <h1>Movies Index path</h1>    
        <div sx={{variant: 'containers.page'}}>
      <h2>Movies</h2>
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {movies?.map((movie) => (
          <div key={movie.id} sx={{width: '33%', p: 2}}>
            <Link key={movie.id} href="/movies/[id]" as={`/movies/${movie.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card'}}>
                  <img sx={{width: '100%'}} src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} />
                    <p><strong>{movie.original_title}</strong></p> 
                    <p><strong>Rating: {movie.vote_average}</strong></p> 
              </div>
            </Link>
          </div>
        ))}
      </div> 
    </div>    
    </div>
  )
}

export default index