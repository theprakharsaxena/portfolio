import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { motion } from 'framer-motion'
import './headerSocial.css'

const socials = [
  { href: 'https://linkedin.com/in/prakhar-saxena-ps', icon: <BsLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/theprakharsaxena', icon: <BsGithub />, label: 'GitHub' },
  { href: 'https://www.instagram.com/prakharsaxena5125/', icon: <BsInstagram />, label: 'Instagram' },
]

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="header__social-link"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 + i * 0.1 }}
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          {s.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default HeaderSocial