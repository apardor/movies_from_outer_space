import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Pagination.module.css'



const Pagination = ({moviesPerPage, totalMovies, paginate}: {moviesPerPage:any, totalMovies:any, paginate:any}) => {
  const pageNumbers: number[] = [];

  for(let i = 1; i <= Math.ceil(totalMovies/moviesPerPage); i++){
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className={styles.pagination__ul}>
        {pageNumbers?.map( number =>{
        return   <li key={number}>
                    <Link href="" onClick={()=> paginate(number)}>
                      {number}
                    </Link>
          </li>
        })}

      </ul>
    </nav>
  )
}

export default Pagination