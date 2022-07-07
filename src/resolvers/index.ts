import { PaymentMethod, Resolvers } from 'src/types';
import { getUser } from '../models/user';
import { getPaymentMethod, createPaymentMethod } from '../models/paymentMethod';

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    me: (_, { userInput }) => {
      return getUser(userInput);
    },
    //@ts-ignore
    getPaymentMethod: (_, { paymentMethodInput }) => {
      return getPaymentMethod(paymentMethodInput);
    }
  },
  Mutation: {
    //@ts-ignore 
    createPaymentMethod: (_, { paymentMethodInput }) => {
      return createPaymentMethod(paymentMethodInput);
    }
  }
}

export default resolvers

