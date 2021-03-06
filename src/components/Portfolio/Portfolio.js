import React from 'react'
import './portfolio.css';
import { PortfolioData } from './PortfolioData'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          PortfolioData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel='noreferrer' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div >
    </section >
  )
}

export default Portfolio;