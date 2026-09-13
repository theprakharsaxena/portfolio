import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  }

  return (
    <header id="header">
      <div className="container header__container">
        <motion.div
          className="header__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <motion.div variants={itemVariants} className="header__tag">
            <span className="glow-dot" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h5 variants={itemVariants}>Hello, I'm</motion.h5>

          <motion.h1 variants={itemVariants} className="header__name">
            Prakhar <span className="gradient-text">Saxena</span>
          </motion.h1>

          <motion.h5 variants={itemVariants} className="header__role">
            Full Stack Developer
          </motion.h5>

          <motion.p variants={itemVariants} className="header__bio">
            Crafting immersive web experiences with React, Node.js & modern cloud infrastructure.
          </motion.p>

          <motion.div variants={itemVariants}>
            <CTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeaderSocial />
          </motion.div>
        </motion.div>

        {/* 3D floating badge */}
        <motion.div
          className="header__badge"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 0.8, type: 'spring', stiffness: 100 }}
          style={{
            transform: `translate(${-mousePos.x * 0.08}px, ${-mousePos.y * 0.08}px)`,
          }}
        >
          <div className="header__badge-ring" />
          <div className="header__badge-ring ring-2" />
          <div className="header__badge-content">
            <span className="header__badge-number">2+</span>
            <span className="header__badge-label">Years Exp.</span>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="scroll-indicator__line" />
          <span>Scroll</span>
        </motion.a>
      </div>
    </header>
  )
}

export default Header