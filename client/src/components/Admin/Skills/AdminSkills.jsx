import React from 'react'
import './AdminSkills.scss'

const AdminSkills = () => {
  return (
    <section id="skills">
      <div className="input-block">
        <h1>Add skills</h1>
        <div className="input-container">
          <input type="text" className="input" placeholder="Skill name" />
          <textarea type="text" className="input" rows="4" cols="50" placeholder="Description" />
          <input type="file" className="file-input" />
          <button type="button">Add</button>
        </div>
      </div>
    </section>
  )
}

export default AdminSkills
