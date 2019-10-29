import { UserInputError } from 'apollo-server'

import logger from '../../logger'
import { Cat } from '../../types/Cat'
import { Resolver } from '../../types/GraphQl'

const createCat: Resolver = async (
  _,
  args: {
    cat: Omit<Cat, 'id'>
  },
  context
) => {
  const { cat } = args
  const { CatService } = context.services

  try {
    let catId: number
    try {
      catId = await CatService.create(args.cat)
    } catch (e) {
      if (e.code === '23505') {
        return new UserInputError(e.detail)
      }

      throw Error('Unable to insert cat into the database')
    }

    return {
      id: catId,
      name: cat.name,
    }
  } catch (e) {
    logger.error({
      error: e.message,
      message: 'Failed to add cat to database',
    })
  }
}

export default createCat
