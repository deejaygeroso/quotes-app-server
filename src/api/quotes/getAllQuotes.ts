import { Request, Response } from 'express'
import { Quote } from '../../mongoose/models'

const getAllQuotes = async (req: Request, res: Response): Promise<void> => {
  const quoteModel = new Quote()
  const listOfAllQuotes = await quoteModel.findAll()

  res.header('Content-Type', 'application/json')
  res.send(listOfAllQuotes)
}

export default getAllQuotes
