import React from 'react'
import { motion } from 'framer-motion'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const frontendSkills = [
  { name: 'React.js', level: 'Expert' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'Redux Toolkit', level: 'Expert' },
  { name: 'Vite & Vue.js', level: 'Advanced' },
  { name: 'Tailwind CSS & Shadcn UI', level: 'Expert' },
  { name: 'Material-UI & Bootstrap', level: 'Advanced' },
  { name: 'HTML5 & CSS3', level: 'Expert' },
  { name: 'React Native (Mobile)', level: 'Intermediate' },
]

const backendSkills = [
  { name: 'JavaScript & TypeScript', level: 'Expert' },
  { name: 'Node.js & Express.js', level: 'Expert' },
  { name: 'MongoDB', level: 'Expert' },
  { name: 'REST APIs & JWT Auth', level: 'Expert' },
  { name: 'AWS & Firebase', level: 'Intermediate' },
  { name: 'Vercel & Cloudinary', level: 'Advanced' },
  { name: 'Git, GitHub & Figma', level: 'Expert' },
  { name: 'Postman, Swagger & TanStack Query', level: 'Expert' },
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
    transition={{ delay: index * 0.05, duration: 0.4 }}
    whileHover={{ scale: 1.04, y: -2 }}
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
      <h5>{"// 03. TECHNICAL STACK"}</h5>
      <h2>Skills & Capabilities</h2>
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
            Frontend & Mobile App Development
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
            Backend, Database & Cloud Services
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