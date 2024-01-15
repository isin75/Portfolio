import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import SkillsList from '../../components/Skills/SkillsList'
import TechList from '../../components/TechList/TechList'
import ProjectsList from '../../components/ProjectsList/ProjectsList'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import services from '../../../services'
// import {
//   getDataJobs,
//   getDataProjects,
//   getDataSkills,
//   getDataTech
// } from '../../../store/reducers/DataSlice'

const Home = () => {
  // const { jobs, skills, projects, tech } = useSelector((s) => s.dataSlice)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getDataJobs())
  //   dispatch(getDataProjects())
  //   dispatch(getDataSkills())
  //   dispatch(getDataTech())
  // }, [])
  const { skills, technologies, projects, about, contact } = services.query()
  return (
    <section className="home-page">
      <SkillsList skills={skills} />
      <TechList tech={technologies} />
      <ProjectsList projects={projects} />
      <About about={about} />
      <Contact contact={contact} />
    </section>
  )
}

export default Home
