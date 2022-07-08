import { PaymentMethod as PaymentMethodMongo } from '../models'
import { IPaymentMethodSchema } from 'src/types/mongoModels'

export async function getPaymentMethods() {
  const found = await PaymentMethodMongo.find({})

  return found as IPaymentMethodSchema[]
}

export async function createPaymentMethod(name: String) {
  const create = await PaymentMethodMongo.create({ name })

  return create as IPaymentMethodSchema
}
