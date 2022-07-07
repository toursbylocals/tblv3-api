import { gql } from 'apollo-server-express'

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    me(userInput: UserInput!): User!
    getPaymentMethod(paymentMethodInput: PaymentMethodInput!): PaymentMethod!
  }

  type Mutation {
    createPaymentMethod(paymentMethodInput: PaymentMethodInput!): PaymentMethod!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type PaymentMethod {
    id: ID!
    title: String!
    description: String
    createdAt: String
  }

  input PaymentMethodInput {
    id: ID!
    title: String!,
    description: String
  }
`
