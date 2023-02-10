
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVideo,faRocket, faSpaghettiMonsterFlying,faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import Movies from '@/components/Movies';
import Pagination from '@/components/Pagination';




const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500'


export default function Home() {

const [movies, setMovies] = React.useState([]);; 
const [results, setResults] = React.useState(false); 
const [loading, setLoading] = React.useState(false); 
const [currentPage, setCurrentPage] = React.useState(1); 
const [moviesPerPage] = React.useState(12);
const [search, setSearch] = React.useState(''); 
const [query, setQuery] = React.useState('') ;
const [scroll, setScroll] = React.useState(false) ;

const searchMovie = async () =>{
  const request = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=b7e763dc89359ad28e83964b5a12b539&query=${query}`)
  const res = await request.json();
  setMovies(res.results);
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
        <FontAwesomeIcon icon={faVideo} className={styles.fontawesome__icon}/>
        <FontAwesomeIcon icon={faRocket}  className={styles.fontawesome__icon}/>
        <FontAwesomeIcon icon={faSpaghettiMonsterFlying}  className={styles.fontawesome__icon}/>
        <FontAwesomeIcon icon={faUserAstronaut}  className={styles.fontawesome__icon}/>
        </div>  
      <h2 className={styles.heading__h2}> A tribute to Sci-Fi B movies </h2>
        <form className={styles.search__form} onSubmit={submitSearchMovie}>
          <input className={styles.search__input}  name='query' type='search'  value={search} onChange={handleChange} />
          <button className={styles.search__button} >Search</button>
          <button className={styles.clear__results} onClick={()=> setMovies([])}>clear results</button> 
        </form>
       <div> 
        {  results ? (sciFiResults.length === 0 ?  <h2 className={`${styles.search__no__results} ${styles.heading__h2}`}> No results </h2> : '') : ''}
        { sciFiResults.length > 0 ? <h2 id={styles.results__div} className={`${styles.search__results__length} ${styles.heading__h2}`}>Results: {sciFiResults.length}</h2> : ''}
       </div>
        <div>
          <Movies currentMovies={currentMovies}  loading={loading} />
          <Pagination  moviesPerPage={moviesPerPage} totalMovies={sciFiResults.length} paginate={paginate} />
        </div>  
      </div>
     </main>
    </>
  )
}


