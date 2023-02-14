
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRocket } from "@fortawesome/free-solid-svg-icons";
import Movies from '@/components/Movies';
import Pagination from '@/components/Pagination';




const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500'


export default function Home() {

const [movies, setMovies] = React.useState([]); 
const [results, setResults] = React.useState(false); 
const [loading, setLoading] = React.useState(false); 
const [currentPage, setCurrentPage] = React.useState(1); 
const [moviesPerPage] = React.useState(12);
const [search, setSearch] = React.useState(''); 
const [query, setQuery] = React.useState('') ;
const [random, setRandom] = React.useState('');

const searchMovie = async () =>{
  const request = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=b7e763dc89359ad28e83964b5a12b539&query=${query}`)
  const res = await request.json();
  setMovies(res.results);
  setRandom('')

}

const sciFiResults: any = [];

const sciFiFilter =  movies?.map((movie:any) => {
  const genre =   movie.genre_ids;
  const sciFi = genre.find((el:any) => el === 878)
  if( sciFi != undefined)  {
    sciFiResults.push(movie)
  }
}) 

const handleChange = (e:any) =>{
 setSearch(e.target.value);
}

const submitSearchMovie = (e: React.SyntheticEvent) =>{
  e.preventDefault();
  setResults(true)
  setQuery(search)
  setCurrentPage(1)
}

const randomMovie =  async (e: React.SyntheticEvent) =>{
  e.preventDefault();
  const totalPages = 224;
  const randomPage = Math.floor(Math.random()*totalPages); 
  const request = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&page=${randomPage}`)
  const res = await request.json();
  const randomMovie = res.results[Math.floor(Math.random()*res.results.length)];  
  setRandom(randomMovie)
  setMovies([])
}

const clearMovies = () => {
   setMovies([]);
   setRandom('');
   setSearch('');
   setResults(false);
  }


useEffect(() => {
  searchMovie()
}, [query])

const indexOflastMovie = currentPage * moviesPerPage;
const indexOfFirstMovie = indexOflastMovie - moviesPerPage;
const currentMovies = sciFiResults.slice(indexOfFirstMovie, indexOflastMovie)

const paginate = (pageNumber: number) => setCurrentPage(pageNumber)


  return (
    <>
     <main className={styles.main}>
      <div className={styles.main__hero}>
      <h1 className={styles.heading__h1}> Movies from outer space </h1>
      <div className={styles.emojis}>
        <span className={styles.recommend__movie}>Recommend me a movie</span>
        <FontAwesomeIcon icon={faRocket}  className={styles.fontawesome__icon} onClick={randomMovie}/>
        </div>  
        <form className={styles.search__form} onSubmit={submitSearchMovie}>
          <input className={styles.search__input}  name='query' type='search' value={search} onChange={handleChange} />
          <button className={styles.search__button} >Search</button>
          <button className={styles.clear__results} onClick={clearMovies}>clear results</button> 
        </form>
       <div> 
        {   !results ? ((results && !random) ? (sciFiResults.length === 0 ?  <h2 className={`${styles.search__no__results} ${styles.heading__h2}`}> No results </h2> : '') : '') : ''}
        {  random ?  <h2 className={`${styles.search__no__results} ${styles.heading__h2}`}> Check this one out! </h2> : ''}
        { sciFiResults.length > 0 ? <h2 id={styles.results__div} className={`${styles.search__results__length} ${styles.heading__h2}`}>Results: {sciFiResults.length}</h2> : ''}
       </div>
        <div>
          <Movies currentMovies={currentMovies}  loading={loading} random= {random} />
          { sciFiResults.length > 12 ? <Pagination  moviesPerPage={moviesPerPage} totalMovies={sciFiResults.length} paginate={paginate} /> : ''}
        </div>  
      </div>
     </main>
    </>
  )
}


