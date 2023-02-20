import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Pagination.module.css'




const PaginationDecade = ({pages, paginate, currentPage}: {pages:any, paginate:any, currentPage:any}) => {


  const [pageNumberLimit, SetPageNumberLimit] = useState(5)
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);


  const pageNumbers: number[] = [];

  for(let i = 1; i <= pages; i++){
    pageNumbers.push(i)
  }

  const renderPageNumbers =  pageNumbers?.map( number =>{
    if (number <= maxPageLimit  && number > minPageLimit) {
      return(
        <li key={number}>
          <Link href="" onClick={()=> paginate(number)} className={currentPage === number ? styles.active : ''}>
            {number}
          </Link>
         </li>
      )
      } else {
        return null;
      }
    });

    const handleNextbtn = () => {
      paginate(currentPage + 1);
  
      if (currentPage + 1 > maxPageLimit) {
        setMaxPageLimit(maxPageLimit + pageNumberLimit);
        setMinPageLimit(minPageLimit + pageNumberLimit);
      }
    };  

    const handlePrevbtn = () => {
      paginate(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setMaxPageLimit(maxPageLimit - pageNumberLimit);
        setMinPageLimit(minPageLimit - pageNumberLimit);
      }
    };

    let pageIncrementBtn;
  if (pageNumbers.length > maxPageLimit) {
    pageIncrementBtn = <li>  
    <Link href="" onClick={handleNextbtn}>
     &hellip;
   </Link> 
   </li>;
  }

  let pageDecrementBtn;
  if (minPageLimit >= 1) {
    pageDecrementBtn =  <li>  
    <Link href="" onClick={handlePrevbtn}>
     &hellip;
   </Link> 
   </li>;
  }

  return (
    <nav>
      <ul className={styles.pagination__ul}>
      { pageNumbers.length > 5 ?  <li>
          <Link href="" onClick={handlePrevbtn} className={currentPage === pages[0] ? styles.disabled : ''}>
          Prev
          </Link>
          </li>
          : ''}
       
                  {pageDecrementBtn}
                  {renderPageNumbers}
                  {pageIncrementBtn}

        { pageNumbers.length > 5 ?  <li>
          <Link href="" onClick={handleNextbtn} className={currentPage === pages[pages.length - 1] ? styles.disabled : ''}>
          Next
          </Link>
          </li>
          : ''}
      </ul>
    </nav>
  )
}

export default PaginationDecade