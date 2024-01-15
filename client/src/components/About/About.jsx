import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'

const About = ({ about }) => {
  return (
    <section id="about">
      <SectionHeader
        payload={{
          className: 'about',
          title: 'About'
        }}
      />
      <div className="about-container-div">
        <div className="about-details">
          <h2 className="about-title section-title">{about.title}</h2>
          <p className="about-description">{about.description}</p>
          <a href={null} className="download-link">
            Download Resume
          </a>
        </div>
        <div className="about-me-img-container">
          <img
            src={`/client/src/assets/img/me/${about.imgUrl}`}
            alt="It's me mario"
            className="about-me-img"
          />
        </div>
      </div>
    </section>
  )
}

export default About
