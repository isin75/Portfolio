import mongoose from 'mongoose'

const skillsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  imgURL: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  _isDeleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('skills', skillsSchema)
