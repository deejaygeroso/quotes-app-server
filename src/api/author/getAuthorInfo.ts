import { Request, Response } from 'express'
import { getAuthorsInformation } from '../../lib'

const getAuthorInfo = async (req: Request, res: Response): Promise<void> => {
  const { author } = req.body
  const info = await getAuthorsInformation(author)

  res.header('Content-Type', 'application/json')
  res.send({ author, info })
}

export default getAuthorInfo
