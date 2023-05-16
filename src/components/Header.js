import React from 'react'
import "./Header.scss"
import {AiFillFire, AiFillStar, AiFillCompass} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" />
        </div>
        <div className="searchbar">
  <input type="text" placeholder="search IMDb" />
</div>
        </div>
        <div className="header-right">
            <ul>
                <li>
                    <Link to="/">
                        popular
                        <div className="h-icons">
                        <AiFillFire />

                        </div>
                        </Link>
                </li>
                <li>
                    <Link to="/movies/top_rated">
                        Top Rated
                        <div className="h-icons">
                        <AiFillStar />

                        </div>
                        </Link>
                </li>
                <li>
                    <Link to="/movies/upcoming">
                        Upcoming
                        <div className="h-icons">
                        <AiFillCompass />

                        </div>
                        </Link>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Header