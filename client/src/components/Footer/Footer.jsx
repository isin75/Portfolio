import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import services from '../../../services'

const Footer = () => {
  const { contact } = services.query()
  return (
    <section id="footer">
      <h6 className="footer-credits">Created By ISIN</h6>
      <ul className="links-list clean-list">
        {Object.entries(contact).map((it) => {
          const info = it[1]
          return (
            <li key={info.link} className="contact-info-details">
              <a className="contact-info-link" href={info.link}>
                <FontAwesomeIcon icon={info.footerIcon} />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Footer
