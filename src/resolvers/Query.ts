import { Resolver } from '../types/GraphQl'

const Query: Record<string, Resolver> = {
  cats: (_parent, { filter }, context) => context.services.Cat.getAll(filter),
}

export default Query
