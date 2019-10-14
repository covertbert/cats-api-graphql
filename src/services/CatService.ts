import { Cat, CatFilter } from '../types/Cat'
import { Service } from '../types/GraphQl'

const filterCats = (cats: Cat[], filters: CatFilter[]) =>
  cats.filter(cat =>
    filters.some(filter => {
      const catAttributeValue = cat[filter.key] as string[] & number[]
      const filterValue = filter.value as string & number

      if (Array.isArray(catAttributeValue)) {
        return catAttributeValue.includes(filterValue)
      }

      return filter.value === catAttributeValue
    })
  )

class CatService extends Service {
  public async getAll(filters?: CatFilter[]) {
    if (!filters || filters.length === 0) {
      return this.context.cats
    }

    return filterCats(this.context.cats, filters)
  }
}

export default CatService

export { filterCats }
