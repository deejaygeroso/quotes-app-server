import { Request, Response } from 'express'
import { Quote } from '../../mongoose/models'

const deleteQuote = async (req: Request, res: Response): Promise<void> => {
  const { _id } = req.params

  const quoteModel = new Quote()
  const savedQuote = await quoteModel.deleteQuoteById(_id)

  res.header('Content-Type', 'application/json')
  res.send(savedQuote)
}

export default deleteQuote
