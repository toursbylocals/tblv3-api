// import './config/config'

// launchDBS()

import './config/config'
import { ApolloServer } from 'apollo-server-express'

import Express from 'express'

import { launchDBS } from './db'

import typeDefs from './schemas'
import resolvers from './resolvers'

import { applyMiddleware } from 'graphql-middleware'
//import { buildFederatedSchema } from '@apollo/federation'
import { graphqlUploadExpress } from 'graphql-upload'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { permissions } from './middleware'

import DataLoader from 'dataloader'

export const startServer = async () => {
  const app = Express()
  const port = process.env.PORT || 8000

  // app.use(
  //   expressJwt({
  //     secret: process.env.APP_SECRET,
  //     algorithms: ['HS256'],
  //     credentialsRequired: false
  //   })
  // )

  const schema = makeExecutableSchema({ typeDefs, resolvers })
  const schemaWithMiddleware = applyMiddleware(schema, permissions)

  const server = new ApolloServer({
    schema: schemaWithMiddleware
  })

  await server.start()

  app.use(graphqlUploadExpress())

  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen(port, () => resolve(null)))

  launchDBS()

  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)

  return server
}

startServer()
