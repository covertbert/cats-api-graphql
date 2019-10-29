import { ApolloServer, IResolvers } from 'apollo-server'

import context from './context'
import Mutation from './mutations'
import Query from './resolvers/Query'
import { typeDefs } from './typeDefs'

const resolvers: IResolvers = {
  Mutation,
  Query,
}

export default new ApolloServer({ typeDefs, context, resolvers })
