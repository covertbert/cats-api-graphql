import { Cat, CatFilter } from '../../types/Cat'

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

export { filterCats }
