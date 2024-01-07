import mongoose from 'mongoose'

const technologiesSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  imgUrl: {
    type: String,
    require: true
  },
  _isDeleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('technologies', technologiesSchema)
