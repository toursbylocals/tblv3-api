import mongoose from 'mongoose'

import { connectMongo } from './mongo'

export const launchDBS = (): void => {
  connectMongo()
}

export const closeConnectionDBS = async (): Promise<void> => {
  await mongoose.connection.close()
  console.log(`Connection to ${process.env.DB_NAME} closed`)
}
