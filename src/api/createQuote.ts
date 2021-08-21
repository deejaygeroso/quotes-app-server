import { Quote } from '../mongoose/models'
import { Request, Response } from 'express'

const createQuote = async (req: Request, res: Response): Promise<void> => {
  const { author, quote } = req.body

  if (author && quote) {
    const quoteModel = new Quote()
    const savedQuote = await quoteModel.createIfNotExist({ author, quote })

    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(savedQuote, null, 4))
  } else {
    res.send({ error: 'invalid payload' })
  }
}

export default createQuote
