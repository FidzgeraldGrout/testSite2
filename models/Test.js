import mongoose from 'mongoose'

const MongooseSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Пожалуйста, введите текст'],
    maxlength: [20, 'Текст не может содержать больше 60 символов'],
  }
})


export default mongoose.models == null ? mongoose.model('Test', MongooseSchema) : (mongoose.models.Test || mongoose.model('Test', MongooseSchema))