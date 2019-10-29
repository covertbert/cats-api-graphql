import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

import server from '../apollo'
import { Cat } from '../types/Cat'

const createCat: {
  mutation: any
  variables: {
    cat: Omit<Cat, 'id'>
  }
} = {
  mutation: gql`
    mutation CreateCat_Mutation($cat: CreateCatInput!) {
      id
      name
    }
  `,
  variables: {
    cat: {
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
    },
  },
}

describe('Cats integration tests', () => {
  it('creates a new cat', async () => {
    const { mutate } = createTestClient(server)
    const mutationResponse = await mutate(createCat as any)

    expect(mutationResponse.errors).toBeUndefined()
    expect(mutationResponse.data).toBeDefined()
    expect(mutationResponse.data!.createCat).toBeDefined()

    const { id } = mutationResponse.data!.createCat
    expect(id).toBeDefined()
  })
})
