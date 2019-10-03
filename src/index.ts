import { ApolloServer } from 'apollo-server'

import logger from './logger'
import Query from './resolvers/Query'
import { typeDefs } from './typeDefs'

const resolvers = {
  Query,
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  logger.log({
    level: 'info',
    message: `🚀  Server ready at ${url}`,
  })
})
