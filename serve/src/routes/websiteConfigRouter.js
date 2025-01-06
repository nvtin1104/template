import { Router } from 'express'
import { websiteConfigController } from '~/controller/websiteConfigController'

const websiteConfigRouter = Router()

websiteConfigRouter.post('/', websiteConfigController.update)

export default websiteConfigRouter
