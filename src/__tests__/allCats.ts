import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

import server from '../apollo'

describe('allCats', () => {
  it('queries allCats with all possible fields', async () => {
    const { query } = createTestClient(server)

    const ALL_CATS = gql`
      query {
        allCats {
          name
          adaptability
          affectionLevel
          alternativeNames
          CFAUrl
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
          id
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
          weight {
            lbs
            kg
          }
        }
      }
    `

    // run query against the server and snapshot the output
    const res = await query({ query: ALL_CATS })
    expect(res).toMatchSnapshot()
  })
})
