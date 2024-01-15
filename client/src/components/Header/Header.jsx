import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import Navbar from './Navbar'

const Header = () => {
  return (
    <section id="header">
      <SectionHeader
        payload={{
          className: 'header',
          title: 'The Best Things Come From Living Outside of Your Comfort Zone'
        }}
      />
      <Navbar />
      <div className="logo-name-div">
        <h2 className="name">Ivan</h2>
        <img className="header-logo" src="../../../../public/img/logo/logo.png" alt="header logo" />
        <h2 className="name">Shyshykin</h2>
      </div>
    </section>
  )
}

export default Header
