import React from 'react'
import { motion } from 'framer-motion'
import { MdWork, MdLaunch, MdCheckCircle } from 'react-icons/md'
import './workExperience.css'

import STOCK1 from '../../assets/StockRegister1.png'
import STOCK2 from '../../assets/StockRegister2.png'

const responsibilities = [
  'Added new features and maintained inventory management applications across web and Android platforms using React.js and REST APIs.',
  'Developed and maintained modules for inventory, orders, authentication, payments, and application workflows.',
  'Resolved bugs and improved UI components, API interactions, and application performance.',
  'Collaborated with a 3-member development team and supported application deployments using AWS and Firebase.',
]

const techStack = ['React.js', 'REST APIs', 'Node.js', 'AWS', 'Firebase', 'Redux', 'React Native']

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h5>{"// 02. CAREER"}</h5>
      <h2>Work Experience</h2>
      <div className="container work__container">
        <motion.div
          className="work__timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.div
          className="work__card glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="work__card-dot" />

          <div className="work__header">
            <div className="work__header-left">
              <div className="work__icon-wrap">
                <MdWork />
              </div>
              <div>
                <h3>Full Stack Developer</h3>
                <div className="work__company">
                  <a href="https://web.stockregister.in" target="_blank" rel="noreferrer" className="work__company-link">
                    Stock Register <MdLaunch size={14} />
                  </a>
                  <span className="work__remote">Remote</span>
                </div>
              </div>
            </div>
            <div className="work__duration">
              <span className="work__duration-badge">May 2023 – June 2025</span>
            </div>
          </div>

          <ul className="work__list">
            {responsibilities.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <MdCheckCircle className="work__check-icon" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Work Platform Screenshots Showcase */}
          <div className="work__showcase">
            <div className="work__showcase-grid">
              {/* 1. Company Homepage */}
              <motion.div
                className="work__img-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="work__img-browser-bar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="browser-title">Stock Register Official Website</span>
                </div>
                <img src={STOCK1} alt="Stock Register Official Website Landing" />
              </motion.div>

              {/* 2. Main Web App Software */}
              <motion.div
                className="work__img-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="work__img-browser-bar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="browser-title">Inventory & Billing Web Application</span>
                </div>
                <img src={STOCK2} alt="Stock Register Web App Inventory Software" />
              </motion.div>
            </div>
          </div>

          <div className="work__tech">
            {techStack.map((tech) => (
              <span key={tech} className="work__tech-badge">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
