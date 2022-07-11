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

  type Location {
    city: String
    country: String
  }

  type Interest {
    id: ID!
    name: String!
  }

  type Squad {
    squad: String!
    role: String!
  }

  type Password {
    app: String!
    password: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: [Password]!
    squad: [Squad]!
    status: String!
    location: Location
    phone: String!
    lastLogin: String
    description: String
    createdAt: String
    updatedAt: String
    language: String
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
