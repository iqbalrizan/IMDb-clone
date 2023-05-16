import React from 'react'
import { useState, useEffect } from 'react'
import "./Popular.scss"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useParams } from 'react-router'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Movie = () => {
    const [ Movies, setMovies ] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }, [])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=cb800955967a288f9b66102393e46fbb&language=en-US")
        .then(res => res.json())
        .then(data => setMovies(data.results))
        
        
    }, [])
  return (
    <div className='popular'>

    {isLoading ? 
     <SkeletonTheme color="#202020" highlightColor="#444">
      <h1>loading</h1>
     <Skeleton height={300} duration={2} />
 </SkeletonTheme>
    :
    <>
    <div className="title">
      <h1>Popular </h1>
    </div>
    <div className="gridd">
    {Movies.map((item, index) => (
      <Link key={index} to={`/movie/${item.id}`}>
          <div className="cards">
          <img src={`https://image.tmdb.org/t/p/original${item?item.poster_path:""}`} alt="" />
          <div className="overlay">

          </div>
          </div>
          </Link>

))}

   

    
    </div>
</>
  }

     
    </div>
  )
}

export default Movie