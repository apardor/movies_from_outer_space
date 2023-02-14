import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import Decades from '@/components/Decades';

const api_key = process.env.TMDB_API_KEY;

const index = () => {

  const [movies, setMovies] = React.useState([]); 
  const [pages, setPages] = React.useState(''); 
  const [totalResults, setTotalResults] = React.useState(''); 
  const [currentPage, setCurrentPage] = React.useState('1'); 


  const searchMovieDecade = async () =>{
    const request = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=878&primary_release_date.gte=1940-01-01&primary_release_date.lte=1949-12-31&sort_by=release_date.asc&page=${currentPage}`)
    const res = await request.json();  
    setMovies(res.results);
    setPages(res.total_pages)
    setTotalResults(res.total_results)
  }


useEffect(() => {
  searchMovieDecade()
}, [currentPage])

  const paginate = (pageNumber: string) => {
  setCurrentPage(pageNumber);
}

  return (       
    <div>
        <h1 className={styles.heading__h1}>40s</h1>   
        <h2 className={styles.heading__h2}>Total results: {totalResults}</h2> 
        <Decades movies={movies} pages={pages} paginate={paginate}/>
    </div>    
  )
}

export default index



