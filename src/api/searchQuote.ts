import { Quote } from '../mongoose/models'
import { Request, Response } from 'express'

const searchQuote = async (req: Request, res: Response): Promise<void> => {
  const { searchInput } = req.body

  const quoteModel = new Quote()
  const savedQuote = await quoteModel.searchQuote(searchInput)

  res.header('Content-Type', 'application/json')
  res.send(savedQuote)
}

export default searchQuote
