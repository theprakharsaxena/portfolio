import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { MdOutlineWork } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'

const navItems = [
  { id: '#header', icon: <AiOutlineHome />, label: 'Home' },
  { id: '#about', icon: <AiOutlineUser />, label: 'About' },
  { id: '#work-experience', icon: <MdOutlineWork />, label: 'Experience' },
  { id: '#experience', icon: <BiBook />, label: 'Skills' },
  { id: '#education', icon: <FaGraduationCap />, label: 'Education' },
  { id: '#portfolio', icon: <RiServiceLine />, label: 'Projects' },
  { id: '#contact', icon: <BiMessageSquareDetail />, label: 'Contact' },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  const [tooltip, setTooltip] = useState(null)

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {navItems.map((item) => (
        <div key={item.id} className="nav__item-wrapper">
          <motion.a
            href={item.id}
            className={activeNav === item.id ? 'active' : ''}
            onClick={() => setActiveNav(item.id)}
            onMouseEnter={() => setTooltip(item.id)}
            onMouseLeave={() => setTooltip(null)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
            {activeNav === item.id && (
              <motion.div
                className="nav__active-bg"
                layoutId="nav-active"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.a>
          <AnimatePresence>
            {tooltip === item.id && (
              <motion.span
                className="nav__tooltip"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.15 }}
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.nav>
  )
}

export default Nav