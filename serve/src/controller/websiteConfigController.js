
import { WebsiteConfigModel } from './../model/websiteConfigModel'

const update = async (req, res) => {
  try {
    const data = req.body
    const e = await WebsiteConfigModel.findOne()
    if (!e) {
      await WebsiteConfigModel.create(data)
      return res.status(200).json({ message: 'Website config created' })
    }
    await WebsiteConfigModel.findOneAndUpdate({ _id: e._id }, data)
    res.status(200).json({ message: 'Website config updated' })
  }
  catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
export const websiteConfigController = {
  update
}
