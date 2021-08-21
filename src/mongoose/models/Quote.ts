import { ActiveRecord } from '../../lib'
import { Quote as QuoteSchema } from '../schemas'
import mongoose from '../config/mongoose'
import { IQuote } from '../../interfaces'

// eslint-disable-next-line @typescript-eslint/naming-convention
const Quote = mongoose.model<IQuote>('Quote', QuoteSchema)

class QuoteModel extends ActiveRecord<IQuote> {
  constructor() {
    super(Quote)
  }
}

export default QuoteModel
