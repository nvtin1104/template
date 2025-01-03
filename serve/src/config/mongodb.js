import mongoose from 'mongoose'
import { env } from '~/config/environment'

let isConnected = false
// Kết nối tới MongoDB
export const CONNECT_DB = async () => {
  if (isConnected) {
    console.log('Already connected to the database.')
    return
  }

  try {
    const connection = await mongoose.connect(env.MONGODB_URI, {
      dbName: env.DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true
    console.log(`Connected to database: ${env.DATABASE_NAME}`)
    return connection
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw new Error('Database connection failed')
  }
}

// Đóng kết nối tới MongoDB
export const CLOSE_DB = async () => {
  if (!isConnected) {
    console.log('No active database connection to close.')
    return
  }

  try {
    await mongoose.disconnect()
    isConnected = false
    console.log('Database connection closed.')
  } catch (error) {
    console.error('Failed to close the database connection:', error)
    throw new Error('Error closing database connection')
  }
}

// Kiểm tra trạng thái kết nối
export const GET_CONNECTION_STATUS = () => {
  return isConnected
}