
import React from 'react';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { IMovie } from '@/types/types';
import styles from '@/styles/Single.module.css'



const imageDefaultEndPoint = 'https://image.tmdb.org/t/p/w500/'


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const defaultEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=b7e763dc89359ad28e83964b5a12b539&language=en-US` 
  const res = await fetch(defaultEndPoint);
  const data = await res.json();
  return{
      props: {
        data
      }
    }
  }



const Page = ({ data }: IMovie) => {
 
  return (
  
    <div className={styles.main__container}>
    {data.status_message ? <p>The resource you requested could not be found.</p> : ''}
    <section className={styles.container__left}>
    <h1 className={styles.single__h1}>{data.original_title} </h1>
    { data.spoken_languages ? <h3>Language: {data.spoken_languages.map(el => el.english_name)}</h3> : ''}
    <p  className={styles.container__left__parragraph}>{data.overview}</p>
    <p  className={styles.container__left__parragraph}> Rating: {data.vote_average}</p>
    <p  className={styles.container__left__parragraph}>Release date: {data.release_date}</p>
    </section>
    <section className={styles.container__right}>
    <Image src={`${imageDefaultEndPoint}${data.poster_path}`} alt={data.original_title} 
                            width="0"
                            height="0"
                            sizes="auto"
                            style={{ width: '100%', height: '100%' , objectFit: 'cover' }}/>
    </section>
  </div>
  )
}

export default Page