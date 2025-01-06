import mongoose from 'mongoose'
import moment from 'moment-timezone'

const websiteConfigSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ownerName: { type: Number },
  website: { type: String },
  phone: { type: String },
  email: { type: String },
  address: { type: String },
  logo: { type: String },
  updatedAt: {
    type: Date,
    default: () => moment().tz('Asia/Ho_Chi_Minh').toDate()
  }
})

websiteConfigSchema.pre('save', function (next) {
  this.updatedAt = moment().tz('Asia/Ho_Chi_Minh').toDate()
  next()
})

export const WebsiteConfigModel = mongoose.model('websiteConfig', websiteConfigSchema)