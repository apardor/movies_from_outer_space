import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import Decades from '@/components/Decades';

const api_key = process.env.TMDB_API_KEY;

const Index = () => {

  const [movies, SetMovies] = useState([]); 
  const [pages, SetPages] = useState(''); 
  const [totalResults, SetTotalResults] = useState(''); 
  const [currentPage, SetCurrentPage] = useState('1'); 

  useEffect(() => {
    const searchMovieDecade = async () =>{
      const request = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=878&primary_release_date.gte=1900-01-01&primary_release_date.lte=1909-12-31&sort_by=release_date.asc&page=${currentPage}`)
      const res = await request.json();  
      SetMovies(res.results);
      SetPages(res.total_pages)
      SetTotalResults(res.total_results)
    };
    searchMovieDecade();
  }, [currentPage])

  const paginate = (pageNumber: string) => {
  SetCurrentPage(pageNumber);
}

  return (       
    <div>
        <h1 className={styles.heading__h1}>70s</h1>   
        <h2 className={styles.heading__h2}>Total results: {totalResults}</h2> 
        <Decades movies={movies} pages={pages} paginate={paginate}/>
    </div>    
  )
}

export default Index



