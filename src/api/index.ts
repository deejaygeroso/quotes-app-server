import express from 'express'
import home from './home'

const router = express.Router()

router.get('/', home)

export default router
