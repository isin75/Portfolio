import React from 'react'

import SectionHeader from '../../common/SectionHeader/SectionHeader'
import ProjectPreview from './ProjectPreview'

const ProjectsList = ({ projects }) => {
  return (
    <section id="projects">
      <SectionHeader payload={{ className: 'projects', title: 'Projects' }} />
      <ul className="projects-list clean-list">
        {projects.map((it) => {
          return <ProjectPreview key={it._id} projects={it} />
        })}
      </ul>
    </section>
  )
}

export default ProjectsList
