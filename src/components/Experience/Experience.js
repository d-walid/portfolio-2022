import React from 'react'
import './experience.css'

import { BsCheckLg } from 'react-icons/bs'



const Experience = () => {
  return (
    <section id="experience">
      <h2>Mon expérience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Développement frontend</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>

                <h4>HTML</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basique</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
          <h3>Développement backend</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basique</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckLg className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basique</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience