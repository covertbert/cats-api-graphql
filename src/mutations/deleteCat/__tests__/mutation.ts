import { Context } from '../../../types/GraphQl'
import deleteCat from '../mutation'

describe('creatCat mutation', () => {
  let context: Context
  let mockContext: any

  beforeEach(() => {
    context = getContext()
    mockContext = (context as unknown) as Context
  })

  const getContext = (): Context => {
    const mock = {
      cats: [],
      services: {
        CatService: {
          delete: jest.fn(() => 1),
          getAll: jest.fn(),
          getById: jest.fn(),
          getByName: jest.fn(),
        },
      },
    }

    return (mock as unknown) as Context
  }

  const id = 1

  it('returns an id when given correct input', async () => {
    const args = { id }
    const result = await deleteCat(undefined, args, context, undefined as any)

    expect(result).toEqual({ id })
  })

  it('calls the CatService with props', async () => {
    const args = { id }
    await deleteCat(undefined, args, context, undefined as any)

    expect(context.services.CatService.delete).toHaveBeenCalledWith(id)
  })

  describe('error handling', () => {
    it('throws an error if deleting a cat fails', async () => {
      const args = { id }
      mockContext.services.CatService.delete.mockImplementation(() =>
        Promise.reject()
      )

      try {
        await deleteCat(undefined, args, context, undefined as any)
      } catch (e) {
        expect(e).toEqual(new Error('Failed to add cat to database'))
      }
    })
  })
})
