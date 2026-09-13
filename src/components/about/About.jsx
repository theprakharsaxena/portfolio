import React from 'react'
import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'
import ME from '../../assets/me-about.png'

const cards = [
  { icon: <FaAward />, title: 'Experience', value: '2+ Years', sub: 'Full Stack Development' },
  { icon: <FiUsers />, title: 'Company', value: 'Stock Register', sub: 'Full Stack Developer' },
  { icon: <VscFolderLibrary />, title: 'Projects', value: '20+ Built', sub: 'Web & Mobile' },
]

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* Image column */}
        <motion.div
          className="about__image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="about__image-frame">
            <img src={ME} alt="Prakhar Saxena" />
            <div className="about__image-glow" />
          </div>
          <div className="about__image-badge">
            <span>Full Stack Dev</span>
          </div>
        </motion.div>

        {/* Content column */}
        <div className="about__content">
          <div className="about__cards">
            {cards.map((card, i) => (
              <motion.article
                key={card.title}
                className="about__card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="about__card-icon">{card.icon}</div>
                <div>
                  <h5>{card.title}</h5>
                  <h4>{card.value}</h4>
                  <small>{card.sub}</small>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p
            className="about__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Full Stack Developer with <span className="text-primary">2+ years of experience</span> building web applications using <span className="text-accent">React.js, Node.js, Express.js, and MongoDB</span>, with experience in React Native. Skilled in responsive UI development, REST APIs, authentication, payment workflows, Redux Toolkit, AWS, and Firebase. Based in Bareilly, India.
          </motion.p>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default About
