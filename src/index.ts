import createServer from './server'
import initializeMongoDB from './mongoose/config/initializeMongoDB'
import { processENV } from './constants'

initializeMongoDB(processENV.mongoURL, (): void => {
  const app = createServer()
  app.listen(processENV.port, (): void => {
    console.log(`⚡️[server]: Server is running at https://localhost:${processENV.port}`)
  })
})
