import { ParsedUrlQuery } from "querystring"

export interface IRoutes extends ParsedUrlQuery {
    id: string
}


export interface IMovies {
    data:{
        results:{
        id: number,
        original_title: string,
        popularity: number,
        vote_average: number,
        poster_path: string,
        release_date: string,
        total_pages: number
        }[],
        total_pages: number,
        total_results: number
    }
  }

  export interface IMovie {
    data:{
        id: number,
        original_title: string,
        popularity: number,
        overview: string,
        original_language: string,
        vote_average: number,
        poster_path: string,
        release_date: string,
        total_pages: number,
        total_results: number,
        status_message: string,
        spoken_languages: {
            english_name: string
        }[];
    }
  }