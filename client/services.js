import portfolio from './data'

function query() {
  return portfolio
}

const getJobs = () => {
  return portfolio.jobs
}

function getContactInfo() {
  const { whatsapp, phone, email, linkedin } = portfolio.contact
  return { whatsapp, phone, email, linkedin }
}

function getFooterInfo() {
  return portfolio.contact
}

export default {
  getJobs,
  getContactInfo,
  getFooterInfo,
  query
}
