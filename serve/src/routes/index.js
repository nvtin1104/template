import express from 'express'
import { StatusCodes } from 'http-status-codes'
import userRouter from './userRouter.js'

const Router = express.Router()

// Endpoint kiểm tra trạng thái API
Router.get('/status', async (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs are ready to use.'
  })
})

// Endpoint test
Router.route('/test').get((req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Get all' })
})

// Sử dụng router cho user
Router.use('/user', userRouter)

export const APIs = Router
