import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./MovieDetail.scss"

const MovieDetail = () => {

  const [detail, setDetail] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cb800955967a288f9b66102393e46fbb&language=en-US`)
    .then(res => res.json())
    .then(data => setDetail(data))
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='moviedetail'>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`} alt="" />
      </div>
      <hr />
      <div className="description">
        <div className="desc-image">
        <img src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} />
        </div>
        <div className="desc-list">
          <h1>{detail.original_title}</h1>
          <h4>"{detail.tagline}"</h4>
          <h5>{detail.release_date}</h5>

          <p>{detail.overview}</p>

        </div>
      </div>
      <hr />
    </div>
  )
}

export default MovieDetail