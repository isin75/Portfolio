import React from 'react'

const SectionHeader = ({ payload }) => {
  const { className, title } = payload
  return (
    <section className={`${className}-background-image  section-header`}>
      <h3 className="title">{title}</h3>
    </section>
  )
}

export default SectionHeader
