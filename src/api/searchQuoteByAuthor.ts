import { Quote } from '../mongoose/models'
import { Request, Response } from 'express'

const searchQuoteByAuthor = async (req: Request, res: Response): Promise<void> => {
  const { author } = req.body

  const quoteModel = new Quote()
  const savedQuote = await quoteModel.searchQuoteByAuthor(author)

  res.header('Content-Type', 'application/json')
  res.send(savedQuote)
}

export default searchQuoteByAuthor
