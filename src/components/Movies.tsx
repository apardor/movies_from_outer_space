import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link'



const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500'



const Movies = ({currentMovies, loading, random} : {currentMovies:any, loading:any, random:any}) => {

if(loading){
    return <h2> Loading...</h2>

}
  return (<>
    <div className={styles.search__results} >
    {  currentMovies ? (currentMovies.map((movie:any) => {
            return (     
              <>
              <div key={movie.id} className={styles.card}>
              <Link key={movie.id} href="/[id]" as={`/${movie.id}`}>
                    <Image src={`${imageDefaultEndPoint}/${movie.poster_path}`} alt={movie.original_title} 
                            width="0"
                            height="0"
                            sizes="100%"
                            style={{ width: '100%', height: 'auto', borderRadius:'20px 20px 0 0' }}/>
                      <h3 className={styles.heading__h3}><strong>{movie.original_title}</strong></h3> 
                      <p className={styles.p__movies}><strong>Rating: {movie.vote_average}</strong></p> 
                      <p className={styles.p__movies}><strong>Release date: {movie.release_date}</strong></p> 
                
              </Link>
            </div>  
            </> 
            )       
             })) : ''}  </div> 
   { random  ? <div className={styles.search__results__random}>
              <div key={random.id} className={styles.card__random}>
              <Link key={random.id} href="/[id]" as={`/${random.id}`}>
                    <Image src={`${imageDefaultEndPoint}/${random.poster_path}`} alt={random.original_title} 
                            width="0"
                            height="0"
                            sizes="100%"
                            style={{ width: '100%', height: 'auto', borderRadius:'20px 20px 0 0' }}/>
                      <h3 className={styles.heading__h3}><strong>{random.original_title}</strong></h3> 
                      <p className={styles.p__movies}><strong>Rating: {random.vote_average}</strong></p> 
                      <p className={styles.p__movies}><strong>Release date: {random.release_date}</strong></p> 
               
              </Link>
            </div> 
    </div>  : '' }
    </>       
  )
}

export default Movies