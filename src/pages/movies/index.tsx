/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next';
import { IMovies } from '@/types/types';

const api_key = process.env.TMDB_API_KEY;
const defaultEndPoint = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b7e763dc89359ad28e83964b5a12b539&language=en-US&page=1';
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'


export const getStaticProps: GetStaticProps = async () => {
console.log(defaultEndPoint, 'from server');

const res = await fetch(defaultEndPoint);
const data = await res.json();
return{
    props: {
      data
    }
  }
}


const index = ({ data }: IMovies) => {

  console.log(defaultEndPoint, 'from client');

  const movies = data.results;
  return (
    <div>
        <h1>Movies Index path</h1>    
        <div sx={{variant: 'containers.page'}}>
      <h2>Movies fetch secret API</h2>
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        { movies ? (movies.map((movie) => (
          <div key={movie.id} sx={{width: '33%', p: 2}}>
            <Link key={movie.id} href="/movies/[id]" as={`/movies/${movie.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card'}}>
                  <img sx={{width: '100%'}} src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} />
                    <p><strong>{movie.original_title}</strong></p> 
                    <p><strong>Rating: {movie.vote_average}</strong></p> 
              </div>
            </Link>
          </div>
        ))) : <h3>Loading...</h3>}
      </div> 
    </div>    
    </div>
  )
}

export default index