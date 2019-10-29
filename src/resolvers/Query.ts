import { Resolver } from '../types/GraphQl'

const Query: Record<string, Resolver> = {
  cats: (_parent, { filter }, context) =>
    context.services.CatService.getAll(filter),
  getCatById: (_parent, { id }, context) =>
    context.services.CatService.getById(id),
}

export default Query
