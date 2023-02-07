
import Link from 'next/link'
import { GetStaticProps } from 'next';
import { IMovies } from '@/types/types';

const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const defaultEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31&with_keywords=space&sort_by=release_date.asc`;
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
  const totalResults = data.total_results;


  return (       
    <div>
        <h1>30s</h1>   
        <h2>Total results: {totalResults}</h2> 
      <div>
        { movies ? (movies.map((movie) => (
          <div key={movie.id}>
            <Link key={movie.id} href="/30s/[id]" as={`/30s/${movie.id}`}>
                <div>
                  <img src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} />
                    <p><strong>{movie.original_title}</strong></p> 
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
