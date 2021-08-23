import * as mongoose from 'mongoose'

const initializeMongoDB = (mongoURL: string, cb: () => void): void => {
  mongoose
    .connect(mongoURL, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((): void => {
      cb()
    })

  const db = mongoose.connection

  db.on('error', (error): void => {
    console.log('Database connection error! ', error)
  })

  db.once('open', (): void => {
    console.log('Database connection successful')
  })
}

export default initializeMongoDB
