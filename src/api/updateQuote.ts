import { Quote } from '../mongoose/models'
import { Request, Response } from 'express'

const updateQuote = async (req: Request, res: Response): Promise<void> => {
  const { _id, author, quote } = req.body

  const quoteModel = new Quote()
  const savedQuote = await quoteModel.updateQuoteById(_id, author, quote)

  res.header('Content-Type', 'application/json')
  res.send(savedQuote)
}

export default updateQuote
