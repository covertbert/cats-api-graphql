import { ApolloServer, IResolvers } from 'apollo-server'

import context from './context'
import Query from './resolvers/Query'
import { typeDefs } from './typeDefs'

const resolvers: IResolvers = {
  Query,
}

export default new ApolloServer({ typeDefs, context, resolvers })
