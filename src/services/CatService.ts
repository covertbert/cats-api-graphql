import { Cat, CatFilter } from '../types/Cat'
import { Service } from '../types/GraphQl'

const filterCats = (cats: Cat[], filters: CatFilter[]) =>
  cats.filter(cat => filters.some(filter => filter.value === cat[filter.key]))

class CatService extends Service {
  public async getAll(filters?: CatFilter[]) {
    if (!filters || filters.length === 0) {
      return this.context.cats
    }

    return this.context.cats
  }
}

export default CatService

export { filterCats }
