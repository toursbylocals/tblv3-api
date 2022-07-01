import { gql } from 'apollo-server-express'

export default gql`
  schema {
    query: Query
  }

  type Query {
    me: User!
    user(userId: ID!): User!
  }

  extend type Mutation {

  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    status: String!
    email: String!
    createdAt: String!
    location: String!
    description: String!
  }
  `