import { Cat, CatFilter } from '../../types/Cat'
import { filterCats } from '../CatService'

const cats: Array<Partial<Cat>> = [
  {
    name: 'Goose',
    adaptability: 5,
    hairless: false,
    lifeSpan: [14, 15],
    temperament: ['Active', 'Energetic'],
    weight: {
      lbs: [7, 10],
      kg: [3, 5],
    },
  },
  {
    name: 'Duck',
    adaptability: 2,
    hairless: true,
    lifeSpan: [11, 12],
    temperament: ['Floats', 'Flies'],
    weight: {
      lbs: [2, 4],
      kg: [1, 2],
    },
  },
]

describe('filterCats', () => {
  it('filters out hairless cats', () => {
    const filters: CatFilter[] = [{ key: 'hairless', value: false }]

    const expectedResult = [
      {
        name: 'Goose',
        adaptability: 5,
        hairless: false,
        lifeSpan: [14, 15],
        temperament: ['Active', 'Energetic'],
        weight: {
          lbs: [7, 10],
          kg: [3, 5],
        },
      },
    ]

    expect(filterCats(cats as Cat[], filters)).toEqual(expectedResult)
  })

  it('filters out cats with an adaptability level that does not equal 2', () => {
    const filters: CatFilter[] = [{ key: 'adaptability', value: 2 }]

    const expectedResult = [
      {
        name: 'Duck',
        adaptability: 2,
        hairless: true,
        lifeSpan: [11, 12],
        temperament: ['Floats', 'Flies'],
        weight: {
          lbs: [2, 4],
          kg: [1, 2],
        },
      },
    ]

    expect(filterCats(cats as Cat[], filters)).toEqual(expectedResult)
  })
})
