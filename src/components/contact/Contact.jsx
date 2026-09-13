import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import './contact.css'

const contactOptions = [
  {
    icon: <MdOutlineEmail />,
    label: 'Email',
    value: 'prakharsaxena5125@gmail.com',
    href: 'mailto:prakharsaxena5125@gmail.com',
    color: '#7c3aed',
  },
  {
    icon: <BsLinkedin />,
    label: 'LinkedIn',
    value: 'prakhar-saxena-ps',
    href: 'https://linkedin.com/in/prakhar-saxena-ps',
    color: '#06b6d4',
  },
  {
    icon: <BsWhatsapp />,
    label: 'WhatsApp',
    value: '+91 9027030960',
    href: 'https://api.whatsapp.com/send?phone=919027030960&text=Hi!',
    color: '#a855f7',
  },
]

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_j219qon', 'template_it8gwkm', form.current, '9mwx-mOiTGZxk_3B2')
    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>// 06. CONTACT</h5>
      <h2>Get In Touch</h2>
      <div className="container contact__container">
        {/* Options */}
        <div className="contact__options">
          {contactOptions.map((opt, i) => (
            <motion.article
              key={opt.label}
              className="contact__option glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ x: 8 }}
              style={{ '--opt-color': opt.color }}
            >
              <div className="contact__opt-icon" style={{ color: opt.color, background: opt.color + '20' }}>
                {opt.icon}
              </div>
              <div className="contact__opt-info">
                <h4>{opt.label}</h4>
                <p>{opt.value}</p>
                <a href={opt.href} target="_blank" rel="noreferrer">
                  Send a message →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact__form glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="contact__form-title">Send Me a Message</h3>
          <div className="contact__form-field">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="contact__form-field">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="contact__form-field">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message..."
              required
            />
          </div>
          <motion.button
            type="submit"
            className="btn btn-primary contact__submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message ✉️
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact