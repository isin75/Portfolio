import React from 'react'

const JobPreview = ({ jobs }) => {
  return (
    <li className="previous-job-preview">
      <h3 className="job-title"> {jobs.title} </h3>
    </li>
  )
}

export default JobPreview
