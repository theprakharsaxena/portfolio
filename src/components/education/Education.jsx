import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaUniversity } from 'react-icons/fa'
import { BsPatchCheckFill } from 'react-icons/bs'
import './education.css'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Invertis University',
    year: '2025 – 2027',
    icon: <FaGraduationCap />,
    color: '#7c3aed',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Mahatma Jyotiba Phule Rohilkhand University',
    year: '2021 – 2024',
    icon: <FaUniversity />,
    color: '#06b6d4',
  },
]

const certifications = [
  {
    org: 'LinkedIn Learning',
    courses: 'React.js, JavaScript, Express.js, Node.js Essential Training & Redux Toolkit',
  },
  {
    org: 'E-School',
    courses: 'MERN Stack Web Development',
  },
  {
    org: 'Cyber Computer',
    courses: 'Python, C / C++ Programming',
  },
]

const Education = () => {
  return (
    <section id="education">
      <h5>// 04. ACADEMICS</h5>
      <h2>Education & Certifications</h2>
      <div className="container education__container">
        {/* Education Column */}
        <div className="education__column">
          <h3 className="education__col-title">
            <FaGraduationCap /> Education
          </h3>
          <div className="education__cards">
            {education.map((edu, i) => (
              <motion.article
                key={edu.degree}
                className="edu__card glass-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ x: 6 }}
              >
                <div className="edu__card-icon" style={{ color: edu.color, background: edu.color + '20' }}>
                  {edu.icon}
                </div>
                <div>
                  <h4>{edu.degree}</h4>
                  <p className="edu__institution">{edu.institution}</p>
                  <span className="edu__year">{edu.year}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="education__column">
          <h3 className="education__col-title">
            <FaCertificate /> Certifications
          </h3>
          <div className="certs__list">
            {certifications.map((cert, i) => (
              <motion.article
                key={cert.org}
                className="cert__item glass-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ x: -6 }}
              >
                <BsPatchCheckFill className="cert__icon" />
                <div>
                  <h4>{cert.org}</h4>
                  <p>{cert.courses}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
