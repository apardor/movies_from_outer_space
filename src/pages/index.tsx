
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { log } from 'console';




const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500'


export default function Home() {

const [movies, setMovies] = React.useState([]);; 
const [results, setResults] = React.useState(false); 
const [page, setPage] = React.useState(''); 
const [search, setSearch] = React.useState(''); 
const [query, setQuery] = React.useState('') ;

const searchMovie = async () =>{
  const request = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=b7e763dc89359ad28e83964b5a12b539&query=${query}`)
  const res = await request.json();
  setMovies(res.results);
  setPage(res.page)
}



const handleChange = (e:any) =>{
 setSearch(e.target.value);

}

const submitSearchMovie = (e: React.SyntheticEvent) =>{
  e.preventDefault();
  setResults(true)
  setQuery(search)
}


useEffect(() => {
  searchMovie()
}, [query])


const sciFiResults = [];

const sciFiFilter =  movies?.map((movie:any) => {
  const genre =   movie.genre_ids;
  const sciFi = genre.find((el:any) => el === 878)
  if( sciFi != undefined)  {
    sciFiResults.push(movie)
  }
}) 



  return (
    <>
     <main className={styles.main}>
      <div className={styles.main__hero}>
        <form className={styles.search__form} onSubmit={submitSearchMovie}>
          <input className={styles.search__input}  name='query' type='search'  value={search} onChange={handleChange} />
          <button className={styles.search__button} >Search</button>
        </form>
        { results ?
         (sciFiResults.length === 0 ?  <h2 className={styles.search__no__results}> No results </h2> :  <h2 className={styles.search__results__length}>Results: {sciFiResults.length} 
        </h2> ) : ''}
        <div>
      <div className={styles.search__results} >
    
      {  sciFiResults ? (sciFiResults.map((movie:any) => {
              return (     
                <>
                <div key={movie.id} className={styles.card}>
                <Link key={movie.id} href="/[id]" as={`/${movie.id}`}>
                    <div className={styles.card__container}>
                      <Image src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} 
                              width="0"
                              height="0"
                              sizes="100vw"
                              style={{ width: 'auto', height: 'auto' }}/>
                        <h3><strong>{movie.original_title}</strong></h3> 
                        <p><strong>Rating: {movie.vote_average}</strong></p> 
                        <p><strong>Release date: {movie.release_date}</strong></p> 
                  </div>
                </Link>
              </div>  
              </> 
              )       
               })) : ''} 
         </div> 
        </div>  
      </div>
     </main>
    </>
  )
}


