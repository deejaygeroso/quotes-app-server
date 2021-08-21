// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

import express, { Request, Response } from 'express'
import apiRoute from './api'
import cors from 'cors'
import { processENV } from './constants'

const app = express()

app.use(cors())
app.use('/api', apiRoute)
app.get('/', (req: Request, res: Response) => res.send('Express + TypeScript Server'))

app.listen(processENV.port, (): void => {
  console.log(`⚡️[server]: Server is running at https://localhost:${processENV.port}`)
})
