import { ApolloServer, IResolvers } from 'apollo-server'

import context from './context'
import Mutation from './mutations'
import Query from './resolvers/Query'
import { typeDefs } from './typeDefs'

const resolvers: IResolvers = {
  Mutation,
  Query,
}

const playground = { introspection: true, playground: true }

export default new ApolloServer({
  context,
  resolvers,
  typeDefs,
  ...playground,
})
