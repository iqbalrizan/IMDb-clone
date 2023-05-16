import React from 'react'
import "./TopRated.scss"
import {AiFillStar} from "react-icons/ai"

const TopRated = () => {

    const movie = [{
        img : "https://upload.wikimedia.org/wikipedia/id/8/81/ShawshankRedemptionMoviePoster.jpg",
        judul : "The Shawsank Redemption",
        rating : 9.3
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        judul : "The Godfather",
        rating : 9.2
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/id/8/8a/Dark_Knight.jpg",
        judul : "The Dark Knight",
        rating : 9.0
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
        judul : "The Godfather Part II ",
        rating : 9.0
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/330px-12_Angry_Men_%281957_film_poster%29.jpg",
        judul : "12 angry men",
        rating : 9.0
    },
    {
        img : "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
        judul : "Schindler's List ",
        rating : 9.0
    },
    
]
  return (
    <div className='top'>
        <div className="title">
            <p>Top Rated</p>
        </div>

        {movie.map((item, index) => (
            <div className="list" key={index}>
            <div className="movie-list" >
            <div className="movie-poster">
                <img src={item.img} alt="" />
            </div>
            <div className="movie-rating">
                <p>{item.judul}</p>
                <p><AiFillStar color='yellow' /> {item.rating}</p>
            </div>
        </div>
        </div>
        ))}
            
    </div>
  )
}

export default TopRated