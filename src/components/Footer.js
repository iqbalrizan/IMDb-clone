import React from 'react'
import "./Footer.scss"
import {FaTiktok, FaTwitter, FaInstagramSquare, FaYoutube} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="signin">
            <button>Sign in for more acces</button>
        </div>
        <div className="social">
        <FaTiktok color="white" size={25} className='social-icon' />
        <FaTwitter color="white" size={25} className='social-icon' />
        <FaInstagramSquare color="white" size={25} className='social-icon' />
        <FaYoutube color="white" size={25} className='social-icon' />
        <BsFacebook color="white" size={25} className='social-icon' />
        </div>
        <div className="help">
            <ul>
                <li>
                    <p>Get the IMDb App</p>
                </li>
                <li>
                    <p>Help</p>
                </li>
                <li>
                    <p>Site Index</p>
                </li>
                <li>
                    <p>IMDb Pro</p>
                </li>
                <li>
                    <p>Box Office Mojo</p>
                </li>
                <li>
                    <p>IMDb Pro</p>
                </li>
            </ul>
        </div>
        <div className="help2">
            <ul>
                <li>
                    <p>Press Room</p>
                </li>
                <li>
                    <p>Advertising</p>
                </li>
                <li>
                    <p>Jobs</p>
                </li>
                <li>
                    <p>Conditions of Use</p>
                </li>
                <li>
                    <p>Privacy Policy</p>
                </li>
                <li>
                    <p>Your Ads Privacy Choices</p>
                </li>
            </ul>
        </div>
        <div className="amazon">
            <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="" />
        </div>
        <div class="footer-bottom">
      <p>© 2023 My Website by IqbalRizan. All Rights Reserved</p>
    </div>
        </div>
  )
}

export default Footer