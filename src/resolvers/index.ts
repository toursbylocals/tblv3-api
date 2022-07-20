import { Resolvers } from 'src/types'

import { createPaymentMethod, getPaymentMethods } from './paymentMethod'

export const resolvers: Resolvers = {
  Query: {
    paymentMethods: () => {
      return getPaymentMethods()
    }
  },

  Mutation: {
    createPaymentMethod: (_, { paymentMethodName }) => {
      return createPaymentMethod(paymentMethodName)
    }
  }
}

export default resolvers
