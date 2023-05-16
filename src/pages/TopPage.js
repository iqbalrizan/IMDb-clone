import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./TopPage.scss"

const TopPage = () => {
    const [top, setTop] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cb800955967a288f9b66102393e46fbb&language=en-US")
        .then(res => res.json())
        .then(data => setTop(data.results))
        
        
    }, [])

  return (
    <div className='toppage'>
       <>
    <div className="title">
      <h1>Top Rated </h1>
    </div>
    <div className="gridd">
    {top.map((item, index) => (
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
        </div>
  )
}

export default TopPage