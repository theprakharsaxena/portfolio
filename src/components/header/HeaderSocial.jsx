import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/prakhar-saxena-a54949242/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/theprakharsaxena" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://www.instagram.com/prakharsaxena5125/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial