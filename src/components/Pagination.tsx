import React from 'react';
import Link from 'next/link'


const Pagination = (props) => {

const pageLinks = []

for(let i = 1; i < props.pages +1 ; i++){
    pageLinks.push(<li onClick={()=> props.nextPage(i)}><a href="#">{i}</a></li>)
}

  return (
    <ul>
     {pageLinks}
    </ul>
  )
}

export default Pagination