import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Pagination.module.css'



const Pagination = ({moviesPerPage, totalMovies, paginate, minPageLimit, maxPageLimit}: {moviesPerPage:any, totalMovies:any, paginate:any, minPageLimit:any, maxPageLimit:any}) => {
  const pages: number[] = [];

  for(let i = 1; i <= Math.ceil(totalMovies/moviesPerPage); i++){
    pages.push(i)
  }

  const pageNumbers = pages.map(page => {
    if(page <= maxPageLimit  && page > minPageLimit) {
        return(
          <li key={page}>
          <Link href="" onClick={()=> paginate(page)}>
            {page}
          </Link>
</li>
        );
    }else{
        return null;
    }
}

);


  return (
    <nav>
      <ul className={styles.pagination__ul}>
          {pageNumbers}
      </ul>
    </nav>
  )
}

export default Pagination