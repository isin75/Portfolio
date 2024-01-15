import React from 'react'

const TechList = ({ tech }) => {
  return (
    <ul className="tech-list clean-list">
      {tech.map((it) => {
        return (
          <li className="tech-preview" key={it._id}>
            <img
              className="tech-img"
              src={`../../../../public/img/tech-icon/${it.imgUrl}.png`}
              alt="tech icon"
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TechList
