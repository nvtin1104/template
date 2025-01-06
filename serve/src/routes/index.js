import express from 'express'
import { StatusCodes } from 'http-status-codes'
import userRouter from './userRouter.js'
import websiteConfigRouter from './websiteConfigRouter.js'

const Router = express.Router()

Router.get('/status', async (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs are ready to use.'
  })
})
Router.use('/users', userRouter)
Router.use('/website-config', websiteConfigRouter)

export const APIs = Router
