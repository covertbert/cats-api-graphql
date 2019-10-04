import { ApolloServer } from 'apollo-server'

import Query from './resolvers/Query'
import { typeDefs } from './typeDefs'

const resolvers = {
  Query,
}

export default new ApolloServer({ typeDefs, resolvers })
