import { Document } from 'mongoose'

interface IQuote extends Document {
  quote: string
  author: string
}

export default IQuote
