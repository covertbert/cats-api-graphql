import { gql } from 'apollo-server'

const typeDefs = gql`
  type Cat {
    name: String
    adaptability: Int
    affectionLevel: Int
    alternativeNames: [String]
    CFAUrl: String
  }

  type Query {
    allCats: [Cat]
  }
`

export { typeDefs }
