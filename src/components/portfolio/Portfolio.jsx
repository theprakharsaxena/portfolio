import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

const projects = [
  /* ── Top 3 Featured Cards (Fixed as per resume) ── */
  {
    id: 1,
    image: IMG7,
    title: 'PropLedger',
    subtitle: 'Decentralized Real Estate Platform',
    desc: 'Developed a decentralized real estate platform for fractional ownership of premium real estate assets using React, Vite, Tailwind CSS, Solidity, Hardhat, and Ethers.js. Implemented smart contracts for property tokenization and CAPX token vesting using the CAPShield Protocol.',
    tags: ['React', 'Vite', 'Solidity', 'Hardhat', 'Ethers.js', 'Tailwind CSS'],
    github: 'https://github.com/theprakharsaxena',
    demo: 'https://prop-ledger-rose.vercel.app',
    color: '#7c3aed',
  },
  {
    id: 2,
    image: IMG8,
    title: 'Shopping Cart (Luxora)',
    subtitle: 'Full Stack E-commerce Platform',
    desc: 'Built a full-stack e-commerce platform with React.js, Node.js, and MongoDB. Implemented authentication, product management, shopping cart functionality, responsive UI, and REST API integration.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST APIs'],
    github: 'https://github.com/theprakharsaxena',
    demo: 'https://luxora-shopping-cart.vercel.app',
    color: '#06b6d4',
  },
  {
    id: 3,
    image: IMG9,
    title: 'Tie & Style',
    subtitle: 'Fashion Accessories E-commerce Website',
    desc: 'Developed an e-commerce website for bows and scrunchies using React.js and Redux, with product catalog, category-based collections, shopping cart, and product purchasing functionality.',
    tags: ['React.js', 'Redux', 'CSS3', 'E-commerce'],
    github: 'https://github.com/theprakharsaxena',
    demo: 'https://tie-and-style.netlify.app',
    color: '#a855f7',
  },

  /* ── 6 Additional Cards ── */
  {
    id: 4,
    image: IMG1,
    title: 'Developer Abode',
    subtitle: 'EdTech & Student Developer Platform',
    desc: 'EdTech and community platform empowering students and developers with real-world tech internships, skill development resources, technical articles, and collaborative learning.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/theprakharsaxena/Developer-Abode',
    demo: 'https://www.developerabode.com/',
    color: '#7c3aed',
  },
  {
    id: 5,
    image: IMG2,
    title: 'Youtube Clone',
    subtitle: 'Video Streaming Web App',
    desc: 'A full-featured YouTube clone web application with video search, video player, and responsive UI.',
    tags: ['React.js', 'JavaScript', 'CSS3', 'REST API'],
    github: 'https://github.com/theprakharsaxena/youtube-clone',
    demo: 'https://gdxv7z.csb.app/',
    color: '#06b6d4',
  },
  {
    id: 6,
    image: IMG3,
    title: 'Recipe App',
    subtitle: 'Food & Cooking Recipes App',
    desc: 'Interactive recipe search and discovery web application with detailed cooking instructions and ingredients list.',
    tags: ['React.js', 'JavaScript', 'API Integration'],
    github: 'https://github.com/theprakharsaxena/recipe-app',
    demo: 'https://yvwj0m.csb.app/',
    color: '#a855f7',
  },
  {
    id: 7,
    image: IMG4,
    title: 'Calculator',
    subtitle: 'Web Calculator Tool',
    desc: 'Sleek and interactive web calculator for standard mathematical operations.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/theprakharsaxena/calculator-LGMVIP-Web',
    demo: 'https://7qg7cc.csb.app/',
    color: '#7c3aed',
  },
  {
    id: 8,
    image: IMG5,
    title: 'Ecommerce Redux Toolkit',
    subtitle: 'State-Managed E-commerce',
    desc: 'E-commerce web app built with React and Redux Toolkit for efficient state management and cart handling.',
    tags: ['React.js', 'Redux Toolkit'],
    github: 'https://github.com/theprakharsaxena/ecommerce-redux-toolkit',
    demo: 'https://lucent-chimera-6868f4.netlify.app/',
    color: '#06b6d4',
  },
  {
    id: 9,
    image: IMG6,
    title: 'Spin Wheel on Ecommerce',
    subtitle: 'Gamified E-commerce Feature',
    desc: 'Interactive gamified spin-wheel for promotional discounts in e-commerce applications.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/theprakharsaxena/Spin-Wheel-on-eCommerce',
    demo: 'https://classy-sundae-3bb089.netlify.app/',
    color: '#a855f7',
  },
]

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className="project__card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ '--project-color': project.color }}
    >
      <div className="project__image-wrap">
        <img src={project.image} alt={project.title} />
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="project__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project__overlay-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="project__action-btn">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="project__action-btn primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="project__info">
        <div className="project__header">
          <div>
            <h3>{project.title}</h3>
            <p className="project__subtitle">{project.subtitle}</p>
          </div>
        </div>
        <p className="project__desc">{project.desc}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project__tag">{tag}</span>
          ))}
        </div>
        <div className="project__links">
          <a href={project.github} className="btn" target="_blank" rel="noreferrer">
            <FaGithub /> Code
          </a>
          <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>{"// 05. PORTFOLIO"}</h5>
      <h2>Featured Projects</h2>
      <div className="container portfolio__container">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio