import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Developer Abode',
    github: 'https://github.com/theprakharsaxena/Developer-Abode',
    demo: 'https://www.developerabode.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Youtube Clone',
    github: 'https://github.com/theprakharsaxena/youtube-clone',
    demo: 'https://gdxv7z.csb.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Recipe App',
    github: 'https://github.com/theprakharsaxena/recipe-app',
    demo: 'https://yvwj0m.csb.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Calculator',
    github: 'https://github.com/theprakharsaxena/calculator-LGMVIP-Web',
    demo: 'https://7qg7cc.csb.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ecommerce Redux Toolkit',
    github: 'https://github.com/theprakharsaxena/ecommerce-redux-toolkit',
    demo: 'https://lucent-chimera-6868f4.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Spin Wheel on Ecommerce',
    github: 'https://github.com/theprakharsaxena/Spin-Wheel-on-eCommerce',
    demo: 'https://classy-sundae-3bb089.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio