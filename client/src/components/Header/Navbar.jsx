import React, { useState } from 'react'
import config from '../../../config'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true)
  const handleClick = () => {
    setIsHidden(!isHidden)
  }
  const handlePressEsc = (e) => {
    if (e.key === 'Escape') {
      setIsHidden(true)
    }
  }
  return (
    <section className={`main-navbar ${isHidden ? 'hide' : ''}`}>
      <button
        type="button"
        className="menu-button"
        onClick={() => handleClick}
        onKeyDown={handlePressEsc}
      >
        <i className="fas fa-bars" />
        <nav className="header-navbar">
          <a href={`${config.url}`}>Home</a>
          <a href={`${config.url}#skills`}>Skills</a>
          <a href={`${config.url}#projects`}>Projects</a>
          <a href={`${config.url}#about`}>About</a>
          <a href={`${config.url}#contact`}>Contact</a>
        </nav>
      </button>
    </section>
  )
}

export default Navbar
