import CatService from './services/CatService'
import { Context } from './types/GraphQl'

import allCats from './data/cats.json'

const generateContext = async (): Promise<Context> => {
  const context = {} as Context

  context.services = {
    Cat: new CatService(context),
  }

  context.cats = allCats

  return context
}

export default generateContext
