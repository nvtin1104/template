import { Router } from 'express'
import { userController } from '~/controller/userController'

const userRouter = Router()

userRouter.post('/load-mini-app', userController.loadMiniApp)

export default userRouter
