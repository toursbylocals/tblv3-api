import { and, shield } from 'graphql-shield'

export const permissions = shield(
  {
    Query: {

    },
    Mutation: {

    }
  },
  {
    debug: true
  }
)
