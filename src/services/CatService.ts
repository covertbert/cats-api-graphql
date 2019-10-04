// import logger from '../logger'
import { Service } from '../types/GraphQl'

interface CatFilter {
  name: string
}

class CatService extends Service {
  public async getAll(filter?: CatFilter) {
    if (!filter) {
      return this.context.cats
    }
  }
}

export default CatService
