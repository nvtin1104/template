import { Router } from 'express'
import { userController } from '~/controller/userController'

const userRouter = Router()

userRouter.get('/test', userController.test)

export default userRouter
