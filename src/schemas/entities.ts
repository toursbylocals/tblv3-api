import { gql } from 'apollo-server-express'

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    paymentMethods: [PaymentMethod]!
  }

  type Mutation {
    createPaymentMethod(paymentMethodName: String!): PaymentMethod!
  }

  type PaymentMethod {
    _id: ID!
    title: String!
    createdAt: String
    description: String
    updatedAt: String
  }
`
