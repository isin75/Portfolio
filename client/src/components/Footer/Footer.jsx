import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
      <h6 className="footer-credits">Created By ISIN</h6>
      <ul className="links-list clean-list">
        {/* {contactInfoList.map((it) => {
          return (
            <li key={info.link} className="contact-info-details">
              <a className="contact-info-link" href={info.link}>
                <i className={info.footerIcon} />
              </a>
            </li>
          )
        })} */}
      </ul>
    </section>
  )
}

export default Footer
