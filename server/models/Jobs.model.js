import mongoose from 'mongoose'

const jobsSchema = new mongoose.Schema({
  company: {
    type: String,
    require: true
  },
  position: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  timeRange: {
    type: String,
    require: true
  },
  _isDeleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('jobs', jobsSchema)
