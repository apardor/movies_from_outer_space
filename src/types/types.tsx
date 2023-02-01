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
        poster_path: string
        }[]
    }
  }