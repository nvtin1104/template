import mongoose from 'mongoose'
export const UserModel = mongoose.model('users', new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
}))