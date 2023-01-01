import React from 'react'
import './Header.scss'
import CTA from './CTA'
import profpic from '../../assets/profpic.png'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jan Ong</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <div className="profilepic">
          <img src="{profpic}" alt="Profile Picture" />
        </div>
      </div>
    </header>

  )
}

export default Header