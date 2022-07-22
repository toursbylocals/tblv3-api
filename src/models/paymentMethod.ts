import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IPaymentMethodSchema } from '../types/mongoModels'

/**
 * PaymentMethod refers to all methods provided/supported in the TBL marketplace.
 */
export const PaymentMethodSchema = new Schema<IPaymentMethodSchema>(
  {
    name: { type: String, required: [true, 'Payment method is required.'] }
  },
  SchemaGlobalConfig
)

export default model<IPaymentMethodSchema>('paymentMethod', PaymentMethodSchema)
