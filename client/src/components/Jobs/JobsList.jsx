import React from 'react'

import JobPreview from './JobPreview'

const JobsList = ({ jobs }) => {
  return (
    <ul className="previous-jobs-list clean-list">
      {jobs.map((job) => {
        return <JobPreview key={job._id} job={job} />
      })}
    </ul>
  )
}

export default JobsList
