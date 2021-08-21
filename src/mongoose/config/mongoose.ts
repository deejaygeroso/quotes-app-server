import mongoose from 'mongoose'
import { processENV } from '../../constants'

mongoose.connect(processENV.mongoURL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (error): void => {
  console.log('Database connection error! ', error)
})

db.once('open', (): void => {
  console.log('Database connection successful')
})

export default mongoose
