import React from 'react'
import './footer.css'
import { RiInstagramFill } from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Prakhar Saxena</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/prakhar-saxena-a54949242/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/theprakharsaxena" target="_blank" rel="noreferrer"><VscGithub/></a>
        <a href="https://www.instagram.com/prakharsaxena5125/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prakhar Saxena. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer