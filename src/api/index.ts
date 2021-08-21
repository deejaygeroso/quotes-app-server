import express from 'express'
import createQuote from './createQuote'

const router = express.Router()

router.post('/createQuote', createQuote)

export default router
