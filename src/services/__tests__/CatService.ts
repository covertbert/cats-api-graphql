import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

import server from '../../apollo'

describe('Cats integration tests', () => {
  it('queries cats with all possible fields', async () => {
    const { query } = createTestClient(server)

    const CATS = gql`
      query {
        cats {
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

  it('queries cats with all possible fields & some filters', async () => {
    const { query } = createTestClient(server)

    const CATS = gql`
      query {
        cats(filter: [{ key: "adaptability", value: 5 }]) {
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
