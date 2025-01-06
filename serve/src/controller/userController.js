import { UserModel } from '~/model/userModel'

const loadMiniApp = async (req, res) => {
  try {
    const { userID } = req.body
    const e = await UserModel.findOne({
      userZaloId: userID
    })
    if (e) {
      return res.status(200).json({ message: 'User already exists' })
    }
    const newUser = new UserModel({ userZaloId: userID, name: 'Tên mặc định', age: 25 })
    await newUser.save() // Lưu vào MongoDB
    res.status(200).json({ message: 'User created' })

  }
  catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

export const userController = {
  loadMiniApp
}