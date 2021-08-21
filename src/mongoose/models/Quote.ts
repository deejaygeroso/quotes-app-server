import { ActiveRecord } from '../../lib'
import { Quote as QuoteSchema } from '../schemas'
import mongoose from '../config/mongoose'
import { IDeleteReturnData, IQuote, IQuoteCreateInput } from '../../interfaces'

// eslint-disable-next-line @typescript-eslint/naming-convention
const Quote = mongoose.model<IQuote>('Quote', QuoteSchema)

class QuoteModel extends ActiveRecord<IQuote> {
  constructor() {
    super(Quote)
  }

  public createIfNotExist = async (quoteInputData: IQuoteCreateInput): Promise<IQuote> => {
    const quote: IQuote = await this.findIfExist(quoteInputData)
    if (quote === null) {
      return this.createNewQuote(quoteInputData)
    }
    return quote
  }

  public findAll = async (): Promise<IQuote[]> => {
    return this.find()
  }

  public updateQuoteById = async (_id: string, author: string, quote: string): Promise<IQuote> => {
    return this.updateById(_id, { author, quote })
  }

  public deleteQuoteById = async (_id: string): Promise<IDeleteReturnData> => {
    return this.model.deleteOne({ _id })
  }

  private findIfExist = async (quoteInputData: IQuoteCreateInput): Promise<IQuote> => {
    const { author, quote } = quoteInputData
    return this.findOne({ author, quote })
  }

  private createNewQuote = async (data: IQuoteCreateInput): Promise<IQuote> => {
    const quote = {
      author: data.author,
      quote: data.quote,
    }
    return this.create(quote)
  }
}

export default QuoteModel
