import mongoose from 'mongoose'
import moment from 'moment-timezone'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  userZaloId: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  avatar: { type: String },
  createdAt: {
    type: Date,
    default: () => moment().tz('Asia/Ho_Chi_Minh').toDate()
  },
  updatedAt: {
    type: Date,
    default: () => moment().tz('Asia/Ho_Chi_Minh').toDate()
  }
})

// Middleware to update `updatedAt` on save
userSchema.pre('save', function (next) {
  this.updatedAt = moment().tz('Asia/Ho_Chi_Minh').toDate()
  next()
})

export const UserModel = mongoose.model('users', userSchema)