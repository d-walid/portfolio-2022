import React from 'react'
import './services.css';
import { HiBadgeCheck } from 'react-icons/hi'

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Design UI/UX</h3>
          </div>

          <ul className="service__list">

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Découpage d'une maquette</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Création et intégration de maquettes</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Comprendre les besoins d'un client</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Développement web</h3>
          </div>

          <ul className="service__list">

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Création de sites responsives</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Création d'applications web et mobile</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Création et modification d'API</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Compétences en accéssibilité et SEO</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Entretien de bases de données</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Annexe</h3>
          </div>

          <ul className="service__list">

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Gestion et pilotage de projets associatifs</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Ancien DRH d'asso de +80 membres</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Scrum Master sur différents projets</p>
            </li>

            <li>
              <HiBadgeCheck className="service__list-icon" />
              <p>Président d'association</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services