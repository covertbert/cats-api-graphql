import CatService from './services/CatService'
import { Context } from './types/GraphQl'

const generateContext = async (): Promise<Context> => {
  const context = {} as Context

  context.services = {
    CatService: new CatService(context),
  }

  return context
}

export default generateContext
