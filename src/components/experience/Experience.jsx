import React from 'react'
import { motion } from 'framer-motion'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const frontendSkills = [
  { name: 'React.js', level: 'Expert' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'React Native', level: 'Intermediate' },
  { name: 'Redux Toolkit', level: 'Expert' },
  { name: 'JavaScript / TypeScript', level: 'Expert' },
  { name: 'Tailwind CSS / Shadcn UI', level: 'Expert' },
  { name: 'Vite & Vue.js', level: 'Intermediate' },
  { name: 'HTML5 / CSS3', level: 'Expert' },
]

const backendSkills = [
  { name: 'Node.js', level: 'Expert' },
  { name: 'Express.js', level: 'Expert' },
  { name: 'MongoDB & MySQL', level: 'Expert' },
  { name: 'REST APIs & JWT', level: 'Expert' },
  { name: 'AWS & Firebase', level: 'Intermediate' },
  { name: 'Git, GitHub & Vercel', level: 'Expert' },
  { name: 'TanStack Query', level: 'Advanced' },
  { name: 'Postman & Swagger', level: 'Expert' },
]

const levelColors = {
  Expert: '#06b6d4',
  Advanced: '#a855f7',
  Intermediate: '#7c3aed',
}

const SkillCard = ({ skill, index }) => (
  <motion.article
    className="skill__item"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.07, duration: 0.4 }}
    whileHover={{ scale: 1.05, y: -3 }}
  >
    <BsFillPatchCheckFill
      className="skill__icon"
      style={{ color: levelColors[skill.level] }}
    />
    <div className="skill__info">
      <h4>{skill.name}</h4>
      <span
        className="skill__level"
        style={{ color: levelColors[skill.level], borderColor: levelColors[skill.level] + '40' }}
      >
        {skill.level}
      </span>
    </div>
  </motion.article>
)

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Work With</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <motion.div
          className="experience__group glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="experience__group-title">
            <span className="experience__group-icon">⚡</span>
            Frontend & Mobile
          </h3>
          <div className="experience__grid">
            {frontendSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="experience__group glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="experience__group-title">
            <span className="experience__group-icon">🔧</span>
            Backend, Cloud & Tools
          </h3>
          <div className="experience__grid">
            {backendSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience