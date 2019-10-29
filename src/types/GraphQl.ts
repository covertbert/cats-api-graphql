import { GraphQLResolveInfo } from 'graphql'

import CatService from '../services/CatService'
import { Cat } from './Cat'

interface Context {
  services: {
    CatService: CatService
  }
  cats: Cat[]
}

abstract class Service {
  protected context: Context

  constructor(context: Context) {
    this.context = context
  }
}

interface Reference {
  id: number
}

type Resolver<T = any> = (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => T | Promise<T>

type TypeResolver<T> = {
  [P in keyof T]: Resolver<T[P] | Promise<T[P]> | Reference | Reference[]>
}

export { Context, Service, Resolver, TypeResolver }
