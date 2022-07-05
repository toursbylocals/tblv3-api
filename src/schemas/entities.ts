import { gql } from 'apollo-server-express'

export default gql`
  schema {
    query: Query
  }

  type Query {
    me: User!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    createdAt: String
    updatedAt: String
  }
`
