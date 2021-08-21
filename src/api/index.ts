import express from 'express'
import createQuote from './createQuote'
import deleteQuote from './deleteQuote'
import getAllQuotes from './getAllQuotes'
import updateQuote from './updateQuote'
import searchQuoteByAuthor from './searchQuoteByAuthor'

const router = express.Router()

router.post('/createQuote', createQuote)
router.delete('/deleteQuote/:_id', deleteQuote)
router.get('/getAllQuotes', getAllQuotes)
router.post('/searchQuoteByAuthor', searchQuoteByAuthor)
router.put('/updateQuote', updateQuote)

export default router
