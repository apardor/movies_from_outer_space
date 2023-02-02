/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { GetStaticProps } from 'next';
import { IMovies } from '@/types/types';


const api_key = process.env.TMDB_API_KEY;
const baseUrl = process.env.API_URL
const defaultEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=b7e763dc89359ad28e83964b5a12b539&with_genres=878&primary_release_date.gte=1930-01-01&primary_release_date.lte=1939-12-31&with_keywords=space&sort_by=release_date.asc`;
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

  console.log(movies, 'here are movies');
  

  return (       
    <div sx={{variant: 'containers.page'}}>
        <h1>30s</h1>   
        <h2>Total results: {totalResults}</h2> 
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        { movies ? (movies.map((movie) => (
          <div key={movie.id} sx={{width: '33%', p: 2}}>
            <Link key={movie.id} href="/30s/[id]" as={`/30s/${movie.id}`} sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card'}}>
                  <img sx={{width: '100%'}} src={`${imageDefaultEndPoint}${movie.poster_path}`} alt={movie.original_title} />
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



