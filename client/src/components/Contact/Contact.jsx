import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'

const Contact = ({ contact }) => {
  const contactDetails = Object.entries(contact).map((infoDetails) => {
    const [title, info] = [infoDetails[0], infoDetails[1]]
    return (
      <li key={info.link} className="contact-info">
        <a className="contacF-link" href={info.link}>
          <img className="contact-icon" src={`./img/contact-icon/${info.imgUrl}`} alt={title} />
          <h2 className="contact-title">{title}</h2>
        </a>
      </li>
    )
  })

  return (
    <section id="contact">
      <SectionHeader
        payload={{
          className: 'contact',
          title: 'Contact'
        }}
      />

      <img className="logo" src="/client/src/assets/img/logo/logo.png" alt="website-logo" />

      <h2 className="section-title">Get In Touch</h2>

      <ul className="clean-list contact-info-list">{contactDetails}</ul>
    </section>
  )
}

export default Contact
