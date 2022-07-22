import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { ISubscriptionsSchema } from '../types/mongoModels'

export const SubscriptionsSchema = new Schema<ISubscriptionsSchema>(
  {
    category: { type: String, required: [true, 'Subscription category is required.'] }
  },
  SchemaGlobalConfig
)

export default model<ISubscriptionsSchema>('Subscriptions', SubscriptionsSchema)
