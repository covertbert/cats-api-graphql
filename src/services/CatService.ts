import db from '../db'
import { Cat, CatFilter } from '../types/Cat'
import { Service } from '../types/GraphQl'
import { filterCats } from './utils/filters'

const TABLE_NAME = 'cats'

interface CatQuery {
  [key: string]: Cat[keyof Cat]
}

class CatService extends Service {
  public async getAll(filters?: CatFilter[]) {
    const cats = db()
      .select()
      .table<Cat>(TABLE_NAME)
      .orderBy([{ column: 'name', order: 'asc' }])

    if (filters && filters.length > 0) {
      filters.forEach(filter => {
        const dbQuery: CatQuery = {}
        dbQuery[filter.key] = filter.value

        cats.where(dbQuery)
      })
    }

    return await cats
  }

  public async getById(id: number) {
    const cat = await db()
      .table<Cat>(TABLE_NAME)
      .where({ id })
      .first()

    if (!cat) {
      throw Error(`No cat found with this ID`)
    }

    return cat
  }
}

export default CatService

export { filterCats }
