import React from 'react'
import './footer.css';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>PORTFOLIO</a>

      <ul className="permalinks">
        <li><a href='#home'>Accueil</a></li>
        <li><a href='#about'>A propos</a></li>
        <li><a href='#experience'>Expériences</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/walid-didoune/' rel='noreferrer' target='_blank'>
          <BsLinkedin />
        </a>

        <a href='https://github.com/d-walid' rel='noreferrer' target='_blank'>
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Walid Didoune</small>
      </div>
    </footer>
  )
}

export default Footer