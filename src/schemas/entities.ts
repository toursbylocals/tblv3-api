import { gql } from 'apollo-server-express'

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    me(userInput: UserInput!): User!
    paymentMethods: [PaymentMethod]!
  }

  type Mutation {
    createPaymentMethod(paymentMethodName: String!): PaymentMethod!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    _id: ID!
    firstName: String!
    lastName: String!
  }

  type PaymentMethod {
    _id: ID!
    title: String!
    createdAt: String
    description: String
    updatedAt: String
  }
`
