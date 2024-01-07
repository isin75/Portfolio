import React from 'react'

const SectionHeader = ({ className, title }) => {
  const quote = title && 'THE BEST THINGS COME FROM LIVING OUTSIDE OF YOUR COMFORT ZONE'
  return (
    <section className={`${className}-background-image  section-header`}>
      <h3 className="title">{quote}</h3>
    </section>
  )
}

export default SectionHeader
