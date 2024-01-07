import mongoose from 'mongoose'

const technologiesSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  imgUrl: {
    type: String,
    require: true
  }
})

export default mongoose.model('technologies', technologiesSchema)
