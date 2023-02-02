/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { GetStaticProps } from 'next';




const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'






export default function Home() {

const [movies, setMovies] = useState([]);; 
const [search, setSearch] = useState(''); 
const [query, setQuery] = useState('') ;

const searchMovie = async () =>{
  const request = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=b7e763dc89359ad28e83964b5a12b539&query=${query}&sort_by=release_date.asc`)
  const res = await request.json();
  setMovies(res.results);
}



const handleChange = (e:any) =>{
 setSearch(e.target.value);
 console.log(search);
}

const submitSearchMovie = (e: React.SyntheticEvent) =>{
  e.preventDefault();
  setQuery(search)
}


useEffect(() => {
  searchMovie()
}, [query])



  return (
    <>
     <main className={styles.main}>
      <div sx={{ height: `calc(100vh - 60px)`}}>
        <form className='search' onSubmit={submitSearchMovie}>
          <input name='query' type='search'  value={search} onChange={handleChange} />
          <button>Search</button>
        </form>
        <div sx={{variant: 'containers.page'}}>
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
      {  movies ? (movies.map((movie:any) => {
            const genre =   movie.genre_ids;
            const sciFi = genre.find((el:any) => el === 878)
            if( sciFi != undefined)  {
              return (      
                <div key={movie.id} sx={{width: '33%', p: 2}}>
                <Link key={movie.id} href="/movies/[id]" as={`/movies/${movie.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
                    <div sx={{variant: 'containers.card'}}>
                      <img sx={{width: '100%'}} src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} />
                        <p><strong>{movie.original_title}</strong></p> 
                        <p><strong>Rating: {movie.vote_average}</strong></p> 
                        <p><strong>Release date: {movie.release_date}</strong></p> 
                  </div>
                </Link>
              </div>  
              )       
            }})) : ''} 
         </div> 
        </div>  
      </div>
     </main>
    </>
  )
}


