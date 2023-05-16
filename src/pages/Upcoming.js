import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Upcoming.scss"

const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=cb800955967a288f9b66102393e46fbb&language=en-US")
        .then(res => res.json())
        .then(data => setUpcoming(data.results))
        
        
    }, [])

  return (
    <div className='upcoming'>
       <>
    <div className="title">
      <h1> upcoming </h1>
    </div>
    <div className="gridd">
    {upcoming.map((item, index) => (
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

export default Upcoming