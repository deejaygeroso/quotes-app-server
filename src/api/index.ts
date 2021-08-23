import * as express from 'express'
import createQuote from './createQuote'
import deleteQuote from './deleteQuote'
import getAllQuotes from './getAllQuotes'
import getAuthorInfo from './getAuthorInfo'
import updateQuote from './updateQuote'
import searchQuote from './searchQuote'

const router = express.Router()

router.post('/createQuote', createQuote)
router.delete('/deleteQuote/:_id', deleteQuote)
router.get('/getAllQuotes', getAllQuotes)
router.post('/getAuthorInfo', getAuthorInfo)
router.post('/searchQuote', searchQuote)
router.put('/updateQuote', updateQuote)

export default router
