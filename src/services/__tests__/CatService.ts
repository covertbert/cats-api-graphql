import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

// import integration from '../../__fixtures__/integration'
import server from '../../apollo'

describe('Cats integration tests', () => {
  // const { teardown } = integration()
  // afterEach(teardown)

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
          weight
        }
      }
    `

    const res = await query({ query: CATS })
    expect(res).toMatchSnapshot()
  })
})
