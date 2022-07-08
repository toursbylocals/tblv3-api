import { Schema, model, Types } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IPaymentMethodSchema } from '../types/mongoModels'

export const PaymentMethodSchema = new Schema<IPaymentMethodSchema>(
  {
    name: { type: String, required: true }
  },
  SchemaGlobalConfig
)

export default model<IPaymentMethodSchema>('paymentMethod', PaymentMethodSchema)
