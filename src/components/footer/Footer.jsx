import React from 'react'
import { motion } from 'framer-motion'
import { RiInstagramFill } from 'react-icons/ri'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './footer.css'

const navLinks = [
  { href: '#header', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work-experience', label: 'Experience' },
  { href: '#experience', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://linkedin.com/in/prakhar-saxena-ps', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/theprakharsaxena', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.instagram.com/prakharsaxena5125/', icon: <RiInstagramFill />, label: 'Instagram' },
]

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__top">
          <motion.a
            href="#header"
            className="footer__logo"
            whileHover={{ scale: 1.05 }}
          >
            Prakhar <span className="gradient-text">Saxena</span>
          </motion.a>
          <p className="footer__tagline">
            Building the web, one commit at a time. 🚀
          </p>
        </div>

        <div className="footer__divider" />

        <div className="footer__middle">
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="footer__socials">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer__social-link"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <small>&copy; {new Date().getFullYear()} Prakhar Saxena. All rights reserved.</small>
          <small className="footer__credit">Crafted with ❤️ & Three.js</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer