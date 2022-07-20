import { Schema, Types, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IPaymentSchema } from '../types/mongoModels'

export const PaymentSchema = new Schema(
  {
    supplierId: { type: Types.ObjectId, ref: 'Supplier', required: true },
    bookingsId: [{ type: Types.ObjectId, ref: 'Booking', required: true }],
    paymentMethod: { type: Types.ObjectId, required: true },
    currencyId: { type: Types.ObjectId, ref: 'Currency', required: true },
    provider: { type: Types.ObjectId, required: true },
    transactionId: { type: String, required: true }
  },
  SchemaGlobalConfig
)

export default model<IPaymentSchema>('payment', PaymentSchema)
