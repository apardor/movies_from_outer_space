import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Pagination.module.css'



const PaginationDecade = ({pages, paginate}: {pages:any, paginate:any}) => {
  const pageNumbers: number[] = [];

  for(let i = 1; i <= pages; i++){
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

export default PaginationDecade