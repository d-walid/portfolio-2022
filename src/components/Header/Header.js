import React from 'react'
import './header.css';

import walid from '../../assets/walid.png'

import Calltoaction from './Calltoaction'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div id='home' className="container header__container">
        <h4>Bonjour, je suis</h4>
        <h1>Walid Didoune</h1>
        <h5 className="text-light">Développeur full stack junior</h5>
        <Calltoaction />
        <HeaderSocials />

        <div className="walid">
          <img src={walid} alt="Walid Didoune" />
        </div>

        <a href='#contact' className='scroll__down'>
          Aller vers le bas
        </a>
      </div>
    </header>
  )
}

export default Header