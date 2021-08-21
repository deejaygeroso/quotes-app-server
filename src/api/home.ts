
import { Request, Response } from 'express'

const sample = (req: Request, res: Response): void => {
  res.send('Express + TypeScript Server')
}

export default sample
