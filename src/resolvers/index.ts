import { PaymentMethod, Resolvers, User } from 'src/types'
import { getUser } from './user'
import { createPaymentMethod, getPaymentMethods } from './paymentMethod'

export const resolvers: Resolvers = {
  Query: {
    me: (_, { userInput }) => {
      return getUser(userInput)
    },
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
