/* eslint-disable @typescript-eslint/naming-convention */
import { IQuote } from '../../interfaces'
import mongoose from '../config/mongoose'

const Schema = mongoose.Schema

const Quote = new Schema<IQuote>(
  {
    author: { type: String, required: true },
    quote: { type: String, required: true },
  },
  {
    collection: 'quotes',
    timestamps: true,
  },
)

export default Quote
