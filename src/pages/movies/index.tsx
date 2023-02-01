/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next';

const defaultEndPoint = 'https://rickandmortyapi.com/api/character';

export const getStaticProps: GetStaticProps = async () => {
const res = await fetch(defaultEndPoint);
const data = await res.json();
return{
    props: {
      data
    }
  }
}

const index = ({data}) => {

  console.log(data.results, 'here are results');
  

  const movies = data.results;
  

  return (
    <div>
        <h1>Movies Index path</h1>    
        <div sx={{variant: 'containers.page'}}>
      <h2>My Notes</h2>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {movies.map(movie => (
          <div sx={{width: '33%', p: 2}}>
            <Link key={movie.id} href="/movies/[id]" as={`/movies/${movie.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                 <p><strong>{movie.name}</strong></p>
                 <p><strong>{movie.status}</strong></p>
                 <p><strong>{movie.species}</strong></p>
             
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