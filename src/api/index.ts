import express from 'express'
import createQuote from './createQuote'
import getAllQuotes from './getAllQuotes'

const router = express.Router()

router.post('/createQuote', createQuote)
router.get('/getAllQuotes', getAllQuotes)

export default router
