import React from 'react'

const ProjectPreview = ({ projects }) => {
  return (
    <li className="project-preview">
      <div className="project-details">
        <h3 className="project-title section-title">{projects.title} </h3>
        <p className="project-description">{projects.description}</p>
        <ul className="tag-list clean-list">
          {projects.tags.map((tag) => {
            return (
              <li key={tag} className="project-skill-tag">
                {tag}
              </li>
            )
          })}
        </ul>
        <a href={projects.codeUrl} className="code-link">
          Code
        </a>
        <a href={projects.webUrl} className="web-link">
          Web
        </a>
      </div>
      <img
        className="project-img"
        src={`./img/projects-img/${projects.imgUrl}.png`}
        alt={`Project ${projects.title}`}
      />
    </li>
  )
}

export default ProjectPreview
