import * as express from 'express'

import getAuthorInfo from './author/getAuthorInfo'

import createQuote from './quotes/createQuote'
import deleteQuote from './quotes/deleteQuote'
import getAllQuotes from './quotes/getAllQuotes'
import updateQuote from './quotes/updateQuote'
import searchQuotes from './quotes/searchQuotes'

const router = express.Router()

router.post('/author', getAuthorInfo)

router.get('/quotes', getAllQuotes)
router.post('/quotes', createQuote)
router.put('/quotes', updateQuote)
router.delete('/quotes/:_id', deleteQuote)
router.post('/quotes/search', searchQuotes)

export default router
