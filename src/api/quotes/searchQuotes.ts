import { Request, Response } from 'express'
import { Quote } from '../../mongoose/models'

const searchQuotes = async (req: Request, res: Response): Promise<void> => {
  const { searchInput } = req.body

  const quoteModel = new Quote()
  const savedQuote = await quoteModel.searchQuotes(searchInput)

  res.header('Content-Type', 'application/json')
  res.send(savedQuote)
}

export default searchQuotes
