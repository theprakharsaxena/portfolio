import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiTerminal, FiLayers, FiCopy, FiCheck } from 'react-icons/fi'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import './header.css'

const CODE_TABS = {
  config: {
    filename: 'prakhar.config.ts',
    icon: <FiCode className="tab-icon" />,
    lines: [
      { num: 1, content: <span className="code-kw">import</span>, rest: ' { Developer } ', kw2: 'from', rest2: " '@dev/core'" },
      { num: 2, content: '' },
      { num: 3, content: <span className="code-kw">export const</span>, rest: ' prakhar ', kw2: '=', rest2: ' new Developer({' },
      { num: 4, content: '  name:', val: " 'Prakhar Saxena'", comma: ',' },
      { num: 5, content: '  role:', val: " 'Full Stack Developer'", comma: ',' },
      { num: 6, content: '  experience:', val: " '2+ Years'", comma: ',' },
      { num: 7, content: '  location:', val: " 'India'", comma: ',' },
      { num: 8, content: '  stack:', val: " ['React', 'Node', 'Express', 'MongoDB', 'AWS']", comma: ',' },
      { num: 9, content: '  status:', val: " 'Open for Opportunities'", comma: ',' },
      { num: 10, content: '})' },
    ]
  },
  stack: {
    filename: 'stack.env',
    icon: <FiLayers className="tab-icon" />,
    lines: [
      { num: 1, content: '# Core Stack Configuration' },
      { num: 2, content: 'FRONTEND_CORE', val: '=React.js, Redux Toolkit, HTML5/CSS3' },
      { num: 3, content: 'BACKEND_CORE', val: '=Node.js, Express.js, REST APIs' },
      { num: 4, content: 'DATABASE', val: '=MongoDB, Mongoose' },
      { num: 5, content: 'MOBILE', val: '=React Native' },
      { num: 6, content: 'CLOUD_DEPLOY', val: '=AWS, Firebase, Vercel' },
      { num: 7, content: '3D_GRAPHICS', val: '=Three.js, React Three Fiber' },
    ]
  },
  terminal: {
    filename: 'status.log',
    icon: <FiTerminal className="tab-icon" />,
    lines: [
      { num: 1, content: '$ prakhar --status' },
      { num: 2, content: '[INFO] Initializing Full Stack Developer System...' },
      { num: 3, content: '[OK] StockRegister Inventory Platform: DEPLOYED (Web & Android)' },
      { num: 4, content: '[OK] Skill Intelligence Platform: ACTIVE' },
      { num: 5, content: '[OK] REST APIs & Authentication: ENFORCED' },
      { num: 6, content: '[SUCCESS] Ready for new engineering challenges.' },
    ]
  }
}

const Header = () => {
  const [activeTab, setActiveTab] = useState('config')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const textToCopy = CODE_TABS[activeTab].lines.map(l => `${l.content || ''}${l.val || ''}`).join('\n')
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  }

  return (
    <header id="header">
      <div className="container header__container">
        {/* Left Intro Content */}
        <motion.div
          className="header__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="header__tag">
            <span className="status-indicator-dot" />
            <span>Open for Full Stack Roles</span>
          </motion.div>

          <motion.h5 variants={itemVariants} className="header__greeting">
            Hello, I'm
          </motion.h5>

          <motion.h1 variants={itemVariants} className="header__name">
            Prakhar <span className="gradient-text">Saxena</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="header__role">
            Full Stack Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="header__bio">
            Full Stack Developer with 2+ years of experience building web and mobile applications using React.js, Node.js, Express.js, MongoDB, and AWS.
          </motion.p>

          <motion.div variants={itemVariants}>
            <CTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeaderSocial />
          </motion.div>
        </motion.div>

        {/* Right Interactive Developer Code IDE Card */}
        <motion.div
          className="header__terminal-card"
          initial={{ opacity: 0, x: 30, rotateY: 5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {/* Terminal Window Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="terminal-tabs">
              {Object.keys(CODE_TABS).map((tabKey) => (
                <button
                  key={tabKey}
                  className={`terminal-tab ${activeTab === tabKey ? 'active' : ''}`}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {CODE_TABS[tabKey].icon}
                  <span>{CODE_TABS[tabKey].filename}</span>
                </button>
              ))}
            </div>

            <button className="copy-btn" onClick={handleCopy} title="Copy Snippet">
              {copied ? <FiCheck className="copy-icon success" /> : <FiCopy className="copy-icon" />}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            {CODE_TABS[activeTab].lines.map((line, idx) => (
              <div key={idx} className="code-line">
                <span className="line-num">{line.num}</span>
                <span className="line-content">
                  {line.content}
                  {line.rest}
                  {line.kw2 && <span className="code-kw"> {line.kw2}</span>}
                  {line.rest2}
                  {line.val && <span className="code-val">{line.val}</span>}
                  {line.comma}
                </span>
              </div>
            ))}
          </div>

          {/* Terminal Footer Status Bar */}
          <div className="terminal-footer">
            <span className="footer-left">UTF-8 &nbsp; TypeScript &nbsp; LN 10, COL 2</span>
            <span className="footer-right">🟢 READY</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-indicator__line" />
        <span>Scroll Down</span>
      </motion.a>
    </header>
  )
}

export default Header