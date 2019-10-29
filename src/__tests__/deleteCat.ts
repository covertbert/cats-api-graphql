import { gql } from 'apollo-server'
import { createTestClient } from 'apollo-server-testing'

import server from '../apollo'

const deleteCat: {
  mutation: any
  variables: {
    id: number
  }
} = {
  mutation: gql`
    mutation DeleteCat_Mutation($cat: DeleteCatInput!) {
      deleteCat(cat: $cat) {
        id
      }
    }
  `,
  variables: {
    id: 1,
  },
}

describe('DeleteCat integration tests', () => {
  it('deletes a new cat', async () => {
    const { mutate } = createTestClient(server)
    const mutationResponse = await mutate(deleteCat as any)

    expect(mutationResponse.errors).toBeUndefined()
    expect(mutationResponse.data).toBeDefined()
    expect(mutationResponse.data!.deleteCat).toBeDefined()

    const { id } = mutationResponse.data!.deleteCat
    expect(id).toBeDefined()
  })
})
