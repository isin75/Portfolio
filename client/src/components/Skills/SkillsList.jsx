import React from 'react'
import SectionHeader from '../../common/SectionHeader/SectionHeader'
import SkillPreview from './SkillPreview'

const SkillsList = ({ skills }) => {
  return (
    <section id="skills">
      <SectionHeader
        payload={{
          className: 'skills',
          title: 'Skills'
        }}
      />
      <ul className="skills-list clean-list">
        {skills.map((skill) => {
          return <SkillPreview key={skill._id} skill={skill} />
        })}
      </ul>
    </section>
  )
}

export default SkillsList
