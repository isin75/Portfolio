import React from 'react'

const SkillPreview = ({ skill }) => {
  console.log('skill', skill)
  return (
    <li className="skill-preview">
      <img
        className="skill-image"
        src={`/client/src/assets/img/skills-icon/${skill.imgUrl}`}
        alt={skill.title}
      />
      <h3 className="skill-title section-title">{skill.title}</h3>
      <p className="skill-description">{skill.description}</p>
    </li>
  )
}

export default SkillPreview
