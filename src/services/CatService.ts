import { Cat, CatFilter } from '../types/Cat'
import { Service } from '../types/GraphQl'

const filterCats = (cats: Cat[], filters: CatFilter[]) =>
  cats.filter(cat =>
    filters.some(filter => {
      const attributeValue = cat[filter.key]
      const filterValue = filter.value

      if (Array.isArray(attributeValue)) {
        const attributeValueArray: Array<Cat[keyof Cat]> = attributeValue
        return attributeValueArray.includes(filterValue)
      }

      return filter.value === attributeValue
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
