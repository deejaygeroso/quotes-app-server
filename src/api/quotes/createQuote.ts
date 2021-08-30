import { Request, Response } from 'express'
import { Quote } from '../../mongoose/models'

const createQuote = async (req: Request, res: Response): Promise<void> => {
  const { author, quote } = req.body

  if (author && quote) {
    const quoteModel = new Quote()
    const savedQuote = await quoteModel.createIfNotExist({ author, quote })

    res.header('Content-Type', 'application/json')
    res.send(savedQuote)
  } else {
    res.send({ error: 'invalid payload' })
  }
}

export default createQuote
