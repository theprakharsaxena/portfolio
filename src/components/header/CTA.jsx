import React from 'react'
import Resume from '../../assets/Prakhar Saxena Resume.pdf'
import { motion } from 'framer-motion'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
      <motion.a
        href={Resume}
        download="Prakhar_Saxena_Resume.pdf"
        className='btn'
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Download Resume
      </motion.a>
      <motion.a
        href="#contact"
        className='btn btn-primary'
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Let's Talk
      </motion.a>
    </div>
  )
}

export default CTA