import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { IMovies } from '@/types/types';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import PaginationDecade from '@/components/PaginationDecade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGhost } from "@fortawesome/free-solid-svg-icons";


const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const defaultEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&primary_release_date.gte=1900-01-01&primary_release_date.lte=1909-12-31&sort_by=release_date.asc`;
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'



const index = () => {

  const [movies, setMovies] = React.useState([]); 
  const [pages, setPages] = React.useState(''); 
  const [totalResults, setTotalResults] = React.useState(''); 
  const [currentPage, setCurrentPage] = React.useState('1'); 


  const searchMovieDecade = async () =>{
    const request = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&primary_release_date.gte=1900-01-01&primary_release_date.lte=1909-12-31&sort_by=release_date.asc&page=${currentPage}`)
    const res = await request.json();
    console.log(res, 'here are results');
    
    setMovies(res.results);
    setPages(res.total_pages)
    setTotalResults(res.total_results)
  }

console.log(totalResults, 'here is current page');

useEffect(() => {
  searchMovieDecade()
}, [currentPage])


  
  const paginate = (pageNumber: number) => {
  setCurrentPage(pageNumber);
}


  return (       
    <div>
        <h1 className={styles.heading__h1}>00s</h1>   
        <h2 className={styles.heading__h2}>Total results: {totalResults}</h2> 
        <div className={styles.search__results} >
                  { movies ? (movies.map((movie) => (
                       <div key={movie.id} className={styles.card}>
                       <Link key={movie.id} href="/[id]" as={`/${movie.id}`}>
                           <div className={styles.card__container}>

                          { 

                         ( `${imageDefaultEndPoint}${movie.poster_path}` === `${imageDefaultEndPoint}null` ) 
                         ? 
                         <>
                         <FontAwesomeIcon icon={faGhost}  className={styles.no__image__icon}/>
                         <h3>no image</h3> 
                         </>
                         : 
                         <Image src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} 
                         width="0"
                         height="0"
                         sizes="100%"
                         style={{ width: '100%', height: 'auto', borderRadius:'20px 20px 0 0' }}/>  
                          
                          }

            


                           
                             
                            
                        
                      
              
                             
                               <h3 className={styles.heading__h3}><strong>{movie.original_title}</strong></h3> 
                               <p><strong>Rating: {movie.vote_average}</strong></p> 
                               <p><strong>Release date: {movie.release_date}</strong></p> 
                         </div>
                       </Link>
                     </div> 
        )))      
        : <h3>Loading...</h3>}
      </div> 
      <PaginationDecade pages={pages} paginate={paginate}/>

    </div>    
  )
}

export default index



