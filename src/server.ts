// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

import * as express from 'express'
import * as cors from 'cors'
import apiRoute from './api'

const createServer = (): express.Express => {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api', apiRoute)
  app.get('/', (req: express.Request, res: express.Response) => res.send('Express + TypeScript Server'))

  return app
}

export default createServer
