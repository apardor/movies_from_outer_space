import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.heading__h1__about}> About</h1>
        <p className={styles.about__p}>Sci-fi has influenced the development of the film industry since its early years. Maybe we take for granted how a sequence of still images (based on frames per second) deceives our eyes and brains, giving us the illusion of movement. But this was a matter of awe in the early days of film. It is no surprise that an illusionist directed one film that kick-started movies about journeys to outer space: Georges Méliès. His movie ‘A Trip to the Moon’ (1902) is still a reference to sci-fi and pop culture nowadays (you have probably seen images of a man´s face with a cake-looking moon).</p>
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/apWTcPQVB6o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <p className={styles.about__p}>Movies from outer space is a website dedicated to Sci-fi Movies. It is a place to find all kinds of Sci-fi films, and discover crazy and weird plots. It uses The Movie Data Base to fetch movies in the Sci-Fi genre, and it divides pages based on decades from the past century. The site is built with Next JS, TypeScript, and Node, and it is deployed on Vercel. Check out the repo <Link href="https://github.com/apardor/movies_from_outer_space">here</Link></p>
    </div>
  )
}

export default About