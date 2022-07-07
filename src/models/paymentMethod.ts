import { Schema, model } from 'mongoose'
import { SchemaGlobalConfig } from './globals'
import { IPaymentMethodSchema } from '../types/mongoModels'
import { PaymentMethod, PaymentMethodInput } from '../types'
import { PaymentMethod as PaymentMethodMongo } from '../models'

export const PaymentMethodSchema = new Schema<IPaymentMethodSchema>(
  {
    title: { type : String },
    description: { type : String},
    createdAt: { type: String }
  },
  SchemaGlobalConfig
)

export default model<IPaymentMethodSchema>('paymentMethod', PaymentMethodSchema)

export async function getPaymentMethod( paymentMethodInput : PaymentMethodInput ) {
  const found = await PaymentMethodMongo.findOne({ title: paymentMethodInput.title });
  
  return found as PaymentMethod;
}

export async function createPaymentMethod( paymentMethodInput : PaymentMethodInput ) {
  const create = await PaymentMethodMongo.create({ title: paymentMethodInput.title });

  return create as PaymentMethod;
}