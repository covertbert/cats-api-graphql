import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

import server from '../apollo'

describe('CatsById integration tests', () => {
  it('queries a cat by its ID', async () => {
    const { query } = createTestClient(server)

    const CATS = gql`
      query {
        getCatById(id: 5) {
          name
          adaptability
          affectionLevel
          alternativeNames
          childFriendliness
          countryCode
          description
          dogFriendliness
          energyLevel
          experimental
          grooming
          hairless
          healthIssues
          hypoallergenic
          indoor
          intelligence
          lifeSpan
          natural
          origin
          rare
          rex
          shortLegs
          sheddingLevel
          socialNeeds
          strangerFriendly
          suppressedTail
          temperament
          vocalisation
          weight
        }
      }
    `

    const res = await query({ query: CATS })
    expect(res).toMatchSnapshot()
  })
})
