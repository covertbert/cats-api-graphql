import { Transaction } from 'knex'

import db from '../db'
import logger from '../logger'
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

  public async getByName(name: string) {
    const cat = await db()
      .table<Cat>(TABLE_NAME)
      .where({ name })
      .first()

    if (!cat) {
      throw Error(`No cat found with this name`)
    }

    return cat
  }

  public async create(cat: Omit<Cat, 'id'>, trx?: Transaction) {
    const connection = trx || db()
    const [{ id }] = await connection
      .insert(cat)
      .returning(['id', 'name'])
      .into(TABLE_NAME)

    logger.log({ level: 'info', message: 'Created a new cat' })
    return id
  }

  public async delete(id: number, trx?: Transaction) {
    try {
      await this.getById(id)
    } catch (e) {
      throw Error('No cat found with this id')
    }

    const connection = trx || db()
    await connection
      .where('id', id)
      .del()
      .from(TABLE_NAME)

    logger.log({ level: 'info', message: `Deleted cat with id of ${id}` })
    return id
  }
}

export default CatService

export { filterCats }
