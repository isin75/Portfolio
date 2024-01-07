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
  }
})

export default mongoose.model('skills', skillsSchema)
