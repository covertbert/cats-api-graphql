import { Cat, CatFilter } from '../../types/Cat'
import { filterCats } from '../CatService'

const cats = {
  goose: {
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
  duck: {
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
}

const catsArray: Array<Partial<Cat>> = Object.values(cats)

describe('filterCats', () => {
  it('filters out hairless cats', () => {
    const filters: CatFilter[] = [{ key: 'hairless', value: false }]

    const expectedResult = [cats.goose]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })

  it('filters out cats with an adaptability level that does not equal 2', () => {
    const filters: CatFilter[] = [{ key: 'adaptability', value: 2 }]

    const expectedResult = [cats.duck]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })
})
