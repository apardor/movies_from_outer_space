import Link from 'next/link'
import { GetStaticProps } from 'next';
import { IMovies } from '@/types/types';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'


const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const defaultEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&primary_release_date.gte=1910-01-01&primary_release_date.lte=1919-12-31&sort_by=release_date.asc`;
const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'


export const getStaticProps: GetStaticProps = async () => {
const res = await fetch(defaultEndPoint);
const data = await res.json();
return{
    props: {
      data
    }
  }
}


const index = ({ data }: IMovies) => {

  const movies = data.results;
  const pages = data.total_pages
  const totalResults = data.total_results;
  

  return (       
    <div>
        <h1 className={styles.heading__h1}>10s</h1>   
        <h2 className={styles.heading__h2}>Total results: {totalResults}</h2> 
        <div className={styles.search__results} >
                  { movies ? (movies.map((movie) => (
                       <div key={movie.id} className={styles.card}>
                       <Link key={movie.id} href="/[id]" as={`/${movie.id}`}>
                           <div className={styles.card__container}>
                             <Image src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} 
                                     width="0"
                                     height="0"
                                     sizes="100%"
                                     style={{ width: '100%', height: 'auto', borderRadius:'20px 20px 0 0' }}/>
                               <h3 className={styles.heading__h3}><strong>{movie.original_title}</strong></h3> 
                               <p><strong>Rating: {movie.vote_average}</strong></p> 
                               <p><strong>Release date: {movie.release_date}</strong></p> 
                         </div>
                       </Link>
                     </div> 
        ))) : <h3>Loading...</h3>}
      </div> 
    </div>    
  )
}

export default index



