import React from 'react'
import SectionHeader from '../../common/SectionHeader'
import Navbar from './Navbar'

const Header = () => {
  return (
    <section id="header">
      <SectionHeader />
      <Navbar />
      <div className="logo-name-div">
        <h2 className="name">Ivan</h2>
        <img className="header-logo" src="" alt="header logo" />
        <h2 className="name">Shyshykin</h2>
      </div>
    </section>
  )
}

export default Header
