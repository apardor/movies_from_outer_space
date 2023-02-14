import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IMovies } from '@/types/types';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import PaginationDecade from '@/components/PaginationDecade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGhost } from "@fortawesome/free-solid-svg-icons";

const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/';

const Decades = ({movies,pages,paginate} : {movies:any,pages:string,paginate:any}) => {
  return (
    <>
    
<div className={styles.search__results} >
                  { movies ? (movies.map((movie:any) => (
                       <div key={movie.id} className={styles.card}>
                       <Link key={movie.id} href="/[id]" as={`/${movie.id}`}>
                           <div className={styles.card__container}>
                            <section className={styles.image__container}>
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
                                  style={{ width: '100%', height: '100%', borderRadius:'20px 20px 0 0' }}/>  
                                    }
                               </section> 
                               <section className={styles.text__container}>    
                               <h3 className={styles.heading__h3}><strong>{movie.original_title}</strong></h3> 
                               <p><strong>Rating: {movie.vote_average}</strong></p> 
                               <p><strong>Release date: {movie.release_date}</strong></p> 
                               </section>
                         </div>
                       </Link>
                     </div> 
        )))      
        : <h3>Loading...</h3>}
      </div> 
      <PaginationDecade pages={pages} paginate={paginate}/> 
    </>
  )
}

export default Decades
