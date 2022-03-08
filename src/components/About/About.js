import React from 'react'
import './about.css'
import walid from '../../assets/walid.png'

import { FaAward } from 'react-icons/fa'
import { VscFolder } from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Faisons connaissance</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={walid} alt="walid" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience professionnelle</h5>
              <small>2 années d'expériences</small>
            </article>

            <article className="about__card">
              <VscFolder className='about__icon' />
              <h5>Projets</h5>
              <small>Plus de 10 projets complétés</small>
            </article>

            <article className="about__card">
              <VscFolder className='about__icon' />
              <h5>Associatif</h5>
              <small>8 années d'expériences</small>
            </article>
          </div>

          <p>
            Récemment sorti d'un BAC+2 en développeur web. Je souhaite continuer mes études sur un BAC+3 en data analyst, avec le même organisme, OpenClassrooms.<br />
            Ayant une certaine capacité d'adaptation, ainsi qu'un bon sens de l'organisation, je peux facilement m'intégrer à une équipe et travailler avec.
          </p>
          <p>
            Je peux également apporter mes compétences sur de la gestion de projet que ce soit dans le développement ou le pilotage grâce à mes années d'expériences.
          </p>

          <a href="#contact" className="btn btn-primary">Contactez-moi</a>

        </div>
      </div>
    </section>
  )
}

export default About