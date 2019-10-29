import { Cat } from '../../../types/Cat'
import { Context } from '../../../types/GraphQl'
import createCat from '../mutation'

describe('creatCat mutation', () => {
  let context: Context
  let mockContext: any

  beforeEach(() => {
    context = getContext()
    mockContext = (context as unknown) as Context
  })

  const getContext = (): Context => {
    const mock: any = {
      cats: [],
      services: {
        CatService: {
          create: jest.fn(() => 1),
          getAll: jest.fn(),
          getById: jest.fn(),
          getByName: jest.fn(),
        },
      },
    }

    return (mock as unknown) as Context
  }

  const cat: Omit<Cat, 'id'> = {
    adaptability: 5,
    affectionLevel: 5,
    alternativeNames: ['Henry'],
    childFriendliness: 3,
    countryCode: 'EG',
    description: '',
    dogFriendliness: 4,
    energyLevel: 5,
    experimental: false,
    grooming: 1,
    hairless: false,
    healthIssues: 2,
    hypoallergenic: false,
    indoor: false,
    intelligence: 5,
    lifeSpan: [14, 15],
    name: 'Bill',
    natural: true,
    origin: 'Egypt',
    rare: false,
    rex: false,
    sheddingLevel: 2,
    shortLegs: false,
    socialNeeds: 5,
    strangerFriendly: 5,
    suppressedTail: false,
    temperament: [
      'Active',
      'Energetic',
      'Independent',
      'Intelligent',
      'Gentle',
    ],
    vocalisation: 1,
    weight: [3, 5],
    wikipediaURL: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
  }

  it('returns a name and id when given correct input', async () => {
    const args = { cat }
    const result = await createCat(undefined, args, context, undefined as any)

    expect(result).toEqual({ name: 'Bill', id: 1 })
  })

  it('calls the CatService with props', async () => {
    const args = { cat }
    await createCat(undefined, args, context, undefined as any)

    expect(context.services.CatService.create).toHaveBeenCalledWith(cat)
  })

  describe('error handling', () => {
    it('throws an error if creating vehicle check fails', async () => {
      const args = { cat }
      mockContext.services.CatService.create.mockImplementation(() =>
        Promise.reject()
      )

      try {
        await createCat(undefined, args, context, undefined as any)
      } catch (e) {
        expect(e).toEqual(new Error('Failed to add cat to database'))
      }
    })
  })
})
