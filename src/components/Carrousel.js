import React, { useState, useEffect } from 'react'
import "./Carrousel.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"

const Carrousel = () => {

    const [poster, setPoster] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cb800955967a288f9b66102393e46fbb&language=en-US")
        .then(res => res.json())
        .then(data => setPoster(data.results))
        
        
    }, [])
    

  return (
    <div className='carrousel'>
        <Carousel  showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}>
                        {poster.map((item, index) => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${item.id}`} key={index}>
                            <div className="poster">
                                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
                            </div>
                            <div className="posterImage__overlay">
                                    <div className="posterImage__title">{item ? item.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        <div className="date">
                                        {item ? item.release_date : ""}
                                        </div>
                                        <div className="rate">
                                            {item ? item.vote_average :""}
                                            <AiFillStar color="yellow" />
                                        </div>
                                    </div>
                                    <div className="posterImage__description">{item ? item.overview : ""}</div>
                                </div>
                            </Link>
                        ))}

        </Carousel>
    </div>
  )
}

export default Carrousel