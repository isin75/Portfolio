import React from 'react'
import './ButtonPanel.scss' // Импорт вашего файла стилей

const ButtonPanel = () => {
  return (
    <div className="button-panel">
      <button type="button">Skills</button>
      <button type="button">Technologies</button>
      <button type="button">Jobs</button>
      <button type="button">Projects</button>
    </div>
  )
}

export default ButtonPanel
