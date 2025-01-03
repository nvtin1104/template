import mongoose from 'mongoose'
export const ProductModel = mongoose.model('products', new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
}))