import { ProductModel } from '~/model/productModel'
import { UserModel } from '~/model/userModel'

const test = async (req, res) => {
  try {
    const newUser = new UserModel({ name: 'John Doe', age: 25 })
    await newUser.save() // Lưu vào MongoDB
    console.log('User created:', newUser)
    res.status(200).json({ message: 'User created' })
    // const products = new ProductModel({ name: 'Product 1', age: 1000 })
    // await products.save()
    // console.log('Product created:', products)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const loadMiniApp = async (req, res) => {
  try {
    const { userID} = req.body;
    const extingUser = await UserModel.findOne({
      userZaloId: userID
    })
    if (extingUser) {
      return res.status(200).json({ message: 'User already exists' })
    }
    const newUser = new UserModel({ userZaloId: userID , name: 'Ten mac dinh', age: 25 })
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
  test,
  loadMiniApp
}