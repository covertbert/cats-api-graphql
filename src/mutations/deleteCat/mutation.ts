import { UserInputError } from 'apollo-server'

import { Resolver } from '../../types/GraphQl'

const deleteCat: Resolver = async (
  _,
  args: {
    id: number
  },
  context
) => {
  const { id } = args
  const { CatService } = context.services

  let catId: number | Error
  try {
    catId = await CatService.delete(id)
  } catch (e) {
    return new UserInputError(`Cat with id of ${id} does not exist`)
  }

  return {
    id: catId,
  }
}

export default deleteCat
