import React from 'react'
import './footerStyles.css'
import {FaTelegram,FaInstagram,FaGithub,} from "react-icons/fa"
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="info">
            <h4>twkesqolek@gmail.com</h4>
            <h4>+380 93 024 8947</h4>
            <h4>Ukraine, Lviv</h4>
        </div>
        <div className="social">
            <Link to="https://t.me/TwkesqQ"><FaTelegram size={30} color='white'/></Link>
            <Link to="https://www.instagram.com/twkesq_olek/"><FaInstagram size={30} color='white'/></Link>
            <Link to="https://github.com/twkesqW"><FaGithub size={30} color='white'/></Link>

        </div>
    </div>
  )
}

export default Footer