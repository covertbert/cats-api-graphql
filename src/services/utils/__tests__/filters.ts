import { Cat, CatFilter } from '../../../types/Cat'
import { filterCats } from '../../CatService'

const cats = {
  duck: {
    adaptability: 2,
    hairless: true,
    lifeSpan: [11, 14],
    name: 'Duck',
    temperament: ['Floats', 'Flies'],
    weight: [1, 2],
  },
  goose: {
    adaptability: 5,
    hairless: false,
    lifeSpan: [14, 15],
    name: 'Goose',
    temperament: ['Active', 'Energetic'],
    weight: [3, 5],
  },
}

const catsArray: Array<Partial<Cat>> = Object.values(cats)

describe('filterCats', () => {
  it('filters cats that are not hairless', () => {
    const filters: CatFilter[] = [{ key: 'hairless', value: false }]

    const expectedResult = [cats.goose]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })

  it('filters for cats with an adaptability rating of 2', () => {
    const filters: CatFilter[] = [{ key: 'adaptability', value: 2 }]

    const expectedResult = [cats.duck]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })

  it('filters for cats with an adaptability rating of 2 & not hairless', () => {
    const filters: CatFilter[] = [
      { key: 'hairless', value: false },
      { key: 'adaptability', value: 2 },
    ]

    const expectedResult = [cats.goose, cats.duck]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })

  it('filters for cats with temperaments that match the given filter', () => {
    const filters: CatFilter[] = [{ key: 'temperament', value: 'Floats' }]

    const expectedResult = [cats.duck]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })

  it('filters for cats with lifeSpans that match the given filter', () => {
    const filters: CatFilter[] = [{ key: 'lifeSpan', value: 14 }]

    const expectedResult = [cats.goose, cats.duck]

    expect(filterCats(catsArray as Cat[], filters)).toEqual(expectedResult)
  })
})
